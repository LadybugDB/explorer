const express = require("express");
const router = express.Router();
const database = require("./utils/Database");

router.get("/", (_, res) => {
  try {
    res.send(database.getCurrentConfig());
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { dbDir, dbFile, inMemory } = req.body;
    await database.reconfigure({ dbDir, dbFile, inMemory });
    res.send(database.getCurrentConfig());
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
