const Hunt = require("../schemas/Hunt-model");

exports.fetchHunts = async () => {
  return Hunt.find();
};

exports.fetchHuntById = async (id) => {
 
  return Hunt.find({_id : id})
}
