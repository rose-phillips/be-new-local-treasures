const express = require("express");
const app = express();
const mongoose = require("./db/connection");
const cors = require("cors");

const usersRoute = require("./routes/users-route");
const huntsRoute = require("./routes/hunts-route");

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/hunts", huntsRoute);

app.get("/", (req, res) => {
  res.send("Local Treasures API");
});

app.all("/api/*", (req, res) => {
  res.status(404).send({ msg: "link not found" });
});

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err, "unhandled error");
  res.status(500).send({ msg: "Internal Server Error" });
});

module.exports = app;
