const express = require("express");
const { fetchUsers, fetchStatsByUser } = require("../models/users-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await fetchUsers();
    
    res.status(200).send({ users });
  } catch (err) {
    next(err);
  }
});

router.get("/:user/stats", async(req,res,next)=> {
  try{
    let user = req.params.user
    let stats = await fetchStatsByUser(user)
    const newStats = stats.map((stat) => {
      const newStat = {}
      newStat.hunt = stat.hunt
      newStat.time = stat.time
      newStat.username = stat.username
      newStat.date = stat.date
      newStat.id = stat.id
      return newStat;
    })
    console.log(newStats)
  res.status(200).send({stats: newStats})
  } catch (err)
{
  next(err)
}})

module.exports = router;
