const Stats = require("../schemas/Stats-model");

exports.fetchStats = async () => {
  return Stats.find();
};