const express = require("express");
const app = express();
const mongoose = require("./db/connection");

const usersRoute = require("./routes/users-route");
const huntsRoute = require("./routes/hunts-route");

app.use("/users", usersRoute);
app.use("/hunts", huntsRoute);

app.get("/", (req, res) => {
  res.send("here");
});

app.listen(8000);
