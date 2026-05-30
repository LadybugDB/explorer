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
      if (!ssh) {
        throw new Error("ssh config is required for SSH mode.");
      }
      const { host, port = 22, user, password, privateKeyPath, remoteDir, remoteFile } = ssh;
      const mount = sshManager.mount({ host, port, user, password, privateKeyPath, remoteDir });
      try {
        await database.reconfigure({ dbDir: mount.mountPoint, dbFile: remoteFile || "database.kz", inMemory: false });
        sshManager.activateMount(mount.mountPoint, mount.config);
      } catch (err) {
        sshManager.unmount(mount.mountPoint);
        throw err;
      }
    } else {
      await database.reconfigure({ dbDir, dbFile, inMemory: mode === "memory" });
      sshManager.unmountAll();
    }

    res.send(buildResponse());
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
