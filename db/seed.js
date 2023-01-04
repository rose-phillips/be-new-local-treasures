const mongoose = require("./connection");
const User = require("../schemas/User-model");
const Hunt = require("../schemas/Hunt-model");
const Stats = require("../schemas/Stats-model")
const huntData = require("./data/hunt-data");
const userData = require("./data/user-data");
const statsData = require("./data/stats-data")

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(userData);
  await Hunt.deleteMany({});
  await Hunt.insertMany(huntData);
  await Stats.deleteMany({});
  await Stats.insertMany(statsData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
