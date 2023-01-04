const Stats = require("../schemas/Stats-model");

exports.fetchStats = async () => {
  return Stats.find();
};

exports.fetchStatsByHunt = async (title) => {
  return Stats.find({hunt: title})
}

exports.createStats = async()=> {

}

