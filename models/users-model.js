const Users = require("../schemas/User-model");

exports.fetchUsers = async () => {
  return Users.find();
};
