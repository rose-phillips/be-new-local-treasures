const express = require("express");
const app = express();
const cors = require("cors");

const usersRoute = require("./routes/users-route");
const huntsRoute = require("./routes/hunts-route");
const statsRoute = require("./routes/stats-route")

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/hunts", huntsRoute);
app.use("/api/stats", statsRoute)

app.get("/api", (req, res) => {
  res.send("Local Treasures API");
});

app.all("/api/*", (req, res) => {
  res.status(404).send({ msg: "link not found" });
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

app.use((err,req,res,next)=> {
  if(err.code === 'ERR_HTTP_INVALID_STATUS_CODE') {
    res.status(400).send({msg: 'no such hunt'})
  } else {
    next(err)
  }
})


app.use((err, req, res, next) => {
 
  console.log(err, "unhandled error");
  res.status(500).send({ msg: "Internal Server Error" });
});

module.exports = app;
