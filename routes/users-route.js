const express = require("express");
const router = express.Router();
const User = require("../schemas/User-model");

router.get("/", (req, res) => {
  res.send("user route");
});

module.exports = router;
