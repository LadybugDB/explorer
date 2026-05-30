const path = require("path");
const fs = require("fs").promises;
const fsConstants = require("fs").constants;
const constants = require("./Constants");

const MODES = constants.MODES;
const DB_FILE_NAME = "explorer-session.json";

class SessionDatabase {
  constructor() {
    this.isInitialized = false;
    this.data = {
      settings: {},
      history: [],
    };

    const dbPath = process.env.LBUG_DIR;
    if (!dbPath) {
      return;
    }

    this.dbPath = path.resolve(path.join(dbPath, DB_FILE_NAME));
    this.isReadOnly = !!(
      process.env.MODE && process.env.MODE !== MODES.READ_WRITE
    );
    this.init();
  }

  init() {
    if (this.isInitialized) {
      return null;
    }
    if (this.initPromise) {
      return this.initPromise;
    }
    this.initPromise = (async () => {
      let fileExists = false;
      try {
        const content = await fs.readFile(this.dbPath, "utf-8");
        fileExists = true;
        if (content.trim()) {
          this.data = JSON.parse(content);
          this.data.settings = this.data.settings || {};
          this.data.history = Array.isArray(this.data.history) ? this.data.history : [];
        }
      } catch (err) {
        if (err.code !== "ENOENT") {
          this.isReadOnly = true;
          return;
        }
      }

      if (fileExists && !this.isReadOnly) {
        try {
          await fs.access(this.dbPath, fsConstants.W_OK);
        } catch (_) {
          this.isReadOnly = true;
        }
      }

      if (!fileExists && !this.isReadOnly) {
        try {
          await this.persist();
        } catch (_) {
          this.isReadOnly = true;
          return;
        }
      }

      this.isInitialized = true;
      delete this.initPromise;
    })();
    return this.initPromise;
  }

  isWritable() {
    return this.isInitialized && !this.isReadOnly;
  }

  async persist() {
    await fs.mkdir(path.dirname(this.dbPath), { recursive: true });
    await fs.writeFile(this.dbPath, JSON.stringify(this.data, null, 2));
  }

  async getSetting(key = "allSettings") {
    await this.init();
    if (!this.isInitialized) {
      return {};
    }
    return this.data.settings[key] || {};
  }

  async setSetting(value, key = "allSettings") {
    await this.init();
    if (!this.isWritable()) {
      return;
    }
    this.data.settings[key] = value;
    await this.persist();
  }

  async upsertHistoryItem(historyItem) {
    await this.init();
    if (!this.isWritable()) {
      return;
    }
    const index = this.data.history.findIndex((item) => item.uuid === historyItem.uuid);
    if (index === -1) {
      this.data.history.unshift(historyItem);
    } else {
      const current = this.data.history[index];
      this.data.history[index] = {
        ...current,
        ...historyItem,
        gptQuestion: historyItem.gptQuestion || current.gptQuestion,
        cypherQuery: historyItem.cypherQuery || current.cypherQuery,
      };
      const [item] = this.data.history.splice(index, 1);
      this.data.history.unshift(item);
    }
    await this.persist();
  }

  async deleteHistoryItem(uuid) {
    await this.init();
    if (!this.isWritable()) {
      return;
    }
    this.data.history = this.data.history.filter((item) => item.uuid !== uuid);
    await this.persist();
  }

  async getHistoryItems() {
    await this.init();
    if (!this.isInitialized) {
      return [];
    }
    return this.data.history;
  }
}

module.exports = new SessionDatabase();
