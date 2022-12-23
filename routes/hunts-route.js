const express = require("express");
const router = express.Router();
const { fetchHunts, fetchHuntById } = require("../models/hunts-model");

router.get("/", async (req, res, next) => {
  try {
    const hunts = await fetchHunts();
    const newHunts = hunts.map((hunt) => {
      const newHunt = {};
      newHunt.title = hunt.title;
      newHunt.location = hunt.location;
      newHunt.startPoint = hunt.checkpoints[1];
      newHunt.distance = hunt.distance;
      newHunt.id = hunt._id;
      return newHunt;
    });
    res.status(200).send({ hunts: newHunts });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let huntId = req.params.id
    const hunt = await fetchHuntById(huntId)
    
    res.status(200).send({hunt: hunt[0]});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
