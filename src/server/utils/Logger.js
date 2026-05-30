function log(level, message) {
  const output = `[${new Date().toISOString()}] ${level}: ${message}`;
  if (level === "error") {
    console.error(output);
  } else if (level === "warn") {
    console.warn(output);
  } else {
    console.log(output);
  }
}

module.exports = {
  info(message) {
    log("info", message);
  },
  warn(message) {
    log("warn", message);
  },
  error(message) {
    log("error", message);
  },
};
