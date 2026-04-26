const express = require("express");
const router = express.Router();
const database = require("./utils/Database");
const sshManager = require("./utils/SSHManager");

function buildResponse() {
  const dbConfig = database.getCurrentConfig();
  const sshConfig = sshManager.getConfig();
  const mode = sshConfig ? "ssh" : (dbConfig.isInMemory ? "memory" : "file");
  return { ...dbConfig, mode, ssh: sshConfig };
}

router.get("/", (_, res) => {
  try {
    res.send(buildResponse());
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { mode, dbDir, dbFile, ssh } = req.body;

    if (mode === "ssh") {
      const { host, port = 22, user, password, privateKeyPath, remoteDir, remoteFile } = ssh;
      const mountPoint = sshManager.mount({ host, port, user, password, privateKeyPath, remoteDir });
      await database.reconfigure({ dbDir: mountPoint, dbFile: remoteFile || "database.kz", inMemory: false });
    } else {
      sshManager.unmountAll();
      await database.reconfigure({ dbDir, dbFile, inMemory: mode === "memory" });
    }

    res.send(buildResponse());
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
