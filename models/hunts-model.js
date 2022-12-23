const Hunt = require("../schemas/Hunt-model");

exports.fetchHunts = async () => {
  const fetchedHunts = await Hunt.find()
  const hunts = fetchedHunts.map((hunt) => {
    const newHunt = {}
    newHunt.title = hunt.title
    newHunt.location = hunt.location
    newHunt.startPoint = hunt.checkpoints[1]
    newHunt.distance = hunt.distance
    newHunt.id = hunt._id
    console.log(newHunt)
    return newHunt
  })
  return hunts;
};
