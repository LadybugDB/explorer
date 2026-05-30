const { execFileSync } = require("child_process");
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
      execFileSync("which", [cmd], { stdio: "pipe" });
      return true;
    } catch {
      return false;
    }
  }

  _validateConfig({ host, port, user, password, privateKeyPath, remoteDir }) {
    if (!host || !user || !remoteDir) {
      throw new Error("host, user, and remoteDir are required.");
    }
    const numericPort = Number(port);
    if (!Number.isInteger(numericPort) || numericPort < 1 || numericPort > 65535) {
      throw new Error("port must be an integer between 1 and 65535.");
    }
    if (!password && !privateKeyPath) {
      throw new Error("Either password or privateKeyPath is required.");
    }
    return numericPort;
  }

  mount({ host, port = 22, user, password, privateKeyPath, remoteDir }) {
    const numericPort = this._validateConfig({ host, port, user, password, privateKeyPath, remoteDir });
    if (!this._hasCmd("sshfs")) {
      throw new Error(
        "sshfs is not installed. Please install sshfs to use remote SSH databases."
      );
    }

    const mountPoint = fs.mkdtempSync(path.join(os.tmpdir(), "lbug-ssh-"));

    const sshOpts = [
      `port=${numericPort}`,
      "StrictHostKeyChecking=no",
      "UserKnownHostsFile=/dev/null",
      "reconnect",
    ];

    let command;
    let args;
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
      command = "sshpass";
      args = ["-f", passFile, "sshfs", "-o", sshOpts.join(","), `${user}@${host}:${remoteDir}`, mountPoint];
    } else if (privateKeyPath) {
      sshOpts.push(`IdentityFile=${privateKeyPath}`);
      command = "sshfs";
      args = ["-o", sshOpts.join(","), `${user}@${host}:${remoteDir}`, mountPoint];
    }

    try {
      execFileSync(command, args, { stdio: "pipe" });
    } catch (err) {
      try { fs.rmdirSync(mountPoint); } catch {}
      const stderr = err.stderr?.toString().trim() || err.message;
      throw new Error(`SSHFS mount failed: ${stderr}`);
    } finally {
      if (passFile) try { fs.unlinkSync(passFile); } catch {}
    }

    logger.info(`SSH mounted: ${user}@${host}:${remoteDir} -> ${mountPoint}`);
    return {
      mountPoint,
      config: {
        host,
        port: numericPort,
        user,
        remoteDir,
        authType: password ? "password" : "key",
        privateKeyPath: password ? undefined : privateKeyPath,
      },
    };
  }

  activateMount(mountPoint, config) {
    const previousMountPoint = this.activeMountPoint;
    this.activeMountPoint = mountPoint;
    this.activeConfig = { ...config };
    if (previousMountPoint && previousMountPoint !== mountPoint) {
      this._doUnmount(previousMountPoint);
    }
  }

  unmount(mountPoint) {
    this._doUnmount(mountPoint);
  }

  _doUnmount(mountPoint) {
    try {
      try {
        execFileSync("fusermount", ["-u", mountPoint], { stdio: "pipe" });
      } catch {
        execFileSync("umount", [mountPoint], { stdio: "pipe" });
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
