const mongoose = require("./connection");
const User = require("../models/User-model");
const Hunt = require("../models/Hunt-model");
const huntData = require("./data/hunt-data");
const userData = require("./data/user-data");

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(userData);
  await Hunt.deleteMany({});
  await Hunt.insertMany(huntData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
