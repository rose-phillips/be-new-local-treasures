const express = require("express");
const router = express.Router();
const { fetchHunts } = require("../models/hunts-model");

router.get("/", async (req, res, next) => {
  try {
    const hunts = fetchHunts();
    res.status(200).send({ hunts });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
