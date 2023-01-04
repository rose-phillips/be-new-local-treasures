const express = require("express");
const { fetchStats, fetchStatsByHunt, createStats } = require("../models/stats-model");
const router = express.Router();


router.get("/", async (req, res, next) => {
    try {
      const stats = await fetchStats();
      const newStats = stats.map((stat) => {
        const newStat = {}
        newStat.hunt = stat.hunt
        newStat.time = stat.time
        newStat.username = stat.username
        newStat.date = stat.date
        newStat.id = stat.id
        return newStat;
      })
 
      res.status(200).send({ stats: newStats });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:title", async (req, res, next)=> {
    try {
        const huntTitle = req.params.title
        let huntTitleformatted = huntTitle.replace(/-/g, ' ')
        const final = huntTitleformatted.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        const stats = await fetchStatsByHunt(final)
        const newStats = stats.map((stat) => {
            const newStat = {}
            newStat.hunt = stat.hunt
            newStat.time = stat.time
            newStat.username = stat.username
            newStat.date = stat.date
            newStat.id = stat.id
            return newStat;
          })
        res.status(200).send({stats: newStats})
    } catch (err) {
        next(err)
    }
  })
  
  router.post("/", async (req,res,next)=> {
    try {
        await createStats()
        res.status(201).send('stat posted')
    } catch (err) {
        next(err)
    }
  })
module.exports = router