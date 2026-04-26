const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const logger = require("./Logger");

class SSHManager {
  constructor() {
    this.activeMountPoint = null;
    this.activeConfig = null; // stored without password

    const cleanup = () => {
      this.unmountAll();
      process.exit();
    };
    process.on("exit", () => this.unmountAll());
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
  }

  isActive() {
    return this.activeMountPoint !== null;
  }

  getConfig() {
    return this.activeConfig ? { ...this.activeConfig } : null;
  }

  getMountPoint() {
    return this.activeMountPoint;
  }

  _hasCmd(cmd) {
    try {
      execSync(`which ${cmd}`, { stdio: "pipe" });
      return true;
    } catch {
      return false;
    }
  }

  mount({ host, port = 22, user, password, privateKeyPath, remoteDir }) {
    if (!this._hasCmd("sshfs")) {
      throw new Error(
        "sshfs is not installed. Please install sshfs to use remote SSH databases."
      );
    }

    // Unmount any existing mount first
    if (this.activeMountPoint) {
      this._doUnmount(this.activeMountPoint);
    }

    const mountPoint = fs.mkdtempSync(path.join(os.tmpdir(), "lbug-ssh-"));

    const sshOpts = [
      `port=${port}`,
      "StrictHostKeyChecking=no",
      "UserKnownHostsFile=/dev/null",
      "reconnect",
    ];

    let cmd;
    let passFile = null;

    if (password) {
      if (!this._hasCmd("sshpass")) {
        try { fs.rmdirSync(mountPoint); } catch {}
        throw new Error(
          "sshpass is not installed. Install sshpass for password-based auth, or use a private key file instead."
        );
      }
      passFile = path.join(os.tmpdir(), `lbug-pass-${Date.now()}`);
      fs.writeFileSync(passFile, password, { mode: 0o600 });
      cmd = `sshpass -f ${passFile} sshfs -o ${sshOpts.join(",")} ${user}@${host}:${remoteDir} ${mountPoint}`;
    } else if (privateKeyPath) {
      sshOpts.push(`IdentityFile=${privateKeyPath}`);
      cmd = `sshfs -o ${sshOpts.join(",")} ${user}@${host}:${remoteDir} ${mountPoint}`;
    } else {
      try { fs.rmdirSync(mountPoint); } catch {}
      throw new Error("Either password or privateKeyPath is required.");
    }

    try {
      execSync(cmd, { stdio: "pipe" });
    } catch (err) {
      try { fs.rmdirSync(mountPoint); } catch {}
      const stderr = err.stderr?.toString().trim() || err.message;
      throw new Error(`SSHFS mount failed: ${stderr}`);
    } finally {
      if (passFile) try { fs.unlinkSync(passFile); } catch {}
    }

    this.activeMountPoint = mountPoint;
    this.activeConfig = {
      host,
      port: Number(port),
      user,
      remoteDir,
      authType: password ? "password" : "key",
      privateKeyPath: password ? undefined : privateKeyPath,
    };

    logger.info(`SSH mounted: ${user}@${host}:${remoteDir} → ${mountPoint}`);
    return mountPoint;
  }

  _doUnmount(mountPoint) {
    try {
      try {
        execSync(`fusermount -u "${mountPoint}"`, { stdio: "pipe" });
      } catch {
        execSync(`umount "${mountPoint}"`, { stdio: "pipe" });
      }
    } catch (err) {
      logger.warn(`Unmount warning for ${mountPoint}: ${err.message}`);
    }
    try { fs.rmdirSync(mountPoint); } catch {}
    if (this.activeMountPoint === mountPoint) {
      this.activeMountPoint = null;
      this.activeConfig = null;
    }
    logger.info(`SSH unmounted: ${mountPoint}`);
  }

  unmountAll() {
    if (this.activeMountPoint) {
      this._doUnmount(this.activeMountPoint);
    }
  }
}

module.exports = new SSHManager();
