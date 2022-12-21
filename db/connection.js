const mongoose = require("mongoose");
require("dotenv/config");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("connection is now made here!");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
