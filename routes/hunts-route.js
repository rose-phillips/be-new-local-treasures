const express = require("express");
const router = express.Router();
const Hunt = require("../models/Hunt-model");

router.get("/", (req, res) => {
  res.send("hunt route");
});

module.exports = router;
