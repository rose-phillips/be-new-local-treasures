const mongoose = require("mongoose");
require("dotenv/config");
const app = require("../app");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.once("open", () => {
  console.log("connection to Local Treasures successful"),
    app.listen(8000, () => {
      console.log("listening port 8000");
    });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
