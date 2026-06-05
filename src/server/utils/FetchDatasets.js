const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs/promises");
const https = require("https");

const tempPath = path.join(__dirname, "..", "..", "..", "temp");
const datasetsPath = path.join(__dirname, "..", "..", "..", "datasets");
const configPath = path.join(__dirname, "..", "..", "..", "datasets.json");

const deleteFolderRecursive = async (path) => {
  try {
    await fs.rm(path, { recursive: true, force: true });
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }
};

const runGit = (args, options = {}) => {
  return new Promise((resolve, reject) => {
    const gitProcess = spawn("git", args, options);
    gitProcess.stdout.on("data", (data) => {
      console.log(data.toString());
    });
    gitProcess.stderr.on("data", (data) => {
      console.error(data.toString());
    });
    gitProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Git command failed: git ${args.join(" ")}`));
      }
    });
  });
};

const downloadFile = async (url, destination) => {
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if ([301, 302, 303, 307, 308].includes(response.statusCode)) {
        const nextUrl = new URL(response.headers.location, url).toString();
        response.resume();
        downloadFile(nextUrl, destination).then(resolve, reject);
        return;
      }
      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", async () => {
        try {
          await fs.writeFile(destination, Buffer.concat(chunks));
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }).on("error", reject);
  });
};

const fetchUrlDataset = async (dataset) => {
  const datasetPath = path.join(datasetsPath, dataset.path);
  const baseUrl = dataset.source.baseUrl.replace(/\/$/, "");
  console.log(`Downloading ${dataset.name} from ${baseUrl}`);
  for (const file of dataset.source.files) {
    const url = `${baseUrl}/${dataset.path}/${file}`;
    const destination = path.join(datasetPath, file);
    console.log(`\t - ${url}`);
    await downloadFile(url, destination);
  }
};

const fetchGitDatasets = async (config, datasets) => {
  if (datasets.length === 0) {
    return;
  }

  console.log("Cloning repository");
  await runGit([
    "clone",
    "-n",
    "--depth=1",
    "--filter=tree:0",
    config.repository,
    tempPath,
  ]);

  console.log("Gathering datasets paths");
  const datasetPaths = datasets.map((d) => {
    console.log(`\t - ${d.name} at ${d.path}`);
    return path.join(config.datasetsRoot, d.path);
  });

  console.log("Initializing sparse checkout");
  await runGit(["sparse-checkout", "set", "--no-cone", ...datasetPaths], {
    cwd: tempPath,
  });

  console.log("Pulling repository");
  await runGit(["checkout", config.commitHash], { cwd: tempPath });

  console.log("Moving datasets");
  for (const dataset of datasets) {
    const source = path.join(tempPath, config.datasetsRoot, dataset.path);
    const destination = path.join(datasetsPath, dataset.path);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.rename(source, destination);
  }
};

(async () => {
  console.log("Reading config file from", configPath);
  const config = JSON.parse(await fs.readFile(configPath, "utf-8"));
  console.log("Deleting temp and datasets folders");
  await deleteFolderRecursive(tempPath);
  await deleteFolderRecursive(datasetsPath);

  const urlDatasets = config.datasets.filter((d) => d.source?.type === "url");
  const gitDatasets = config.datasets.filter((d) => !d.source);

  for (const dataset of urlDatasets) {
    await fetchUrlDataset(dataset);
  }
  await fetchGitDatasets(config, gitDatasets);

  console.log("Deleting temp folder");
  await deleteFolderRecursive(tempPath);
  console.log("Done");
  process.exit(0);
})();
