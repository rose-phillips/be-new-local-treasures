const Stats = require("../schemas/Stats-model");
const Users = require("../schemas/User-model");

exports.fetchUsers = async () => {
  return Users.find();
};

exports.fetchStatsByUser = async(user)=> {
  
  return Stats.find({username : user})
}
