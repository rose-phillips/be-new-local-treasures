const Hunt = require("../schemas/Hunt-model");

exports.fetchHunts = async () => {
  return Hunt.find();
};
