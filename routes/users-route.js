const express = require("express");
const router = express.Router();
const User = require("../models/User-model");

router.get("/", (req, res) => {
  res.send("user route");
});

module.exports = router;
