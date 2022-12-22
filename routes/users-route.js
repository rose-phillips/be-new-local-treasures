const express = require("express");
const { fetchUsers } = require("../models/users-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await fetchUsers();
    res.status(200).send({ users });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
