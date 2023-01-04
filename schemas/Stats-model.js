const { mongoose, Schema } = require("mongoose");

const statsSchema = new Schema(
  {
    hunt: String,
    date: String,
    time: Number,
    username: String,
  },
  { timestamps: true }
);

const Stats = mongoose.model("stats", statsSchema);

module.exports = Stats;

/*
 
{
  hunt: 'demo-hunt',
  date: 01-01-0000,
  time: 1620,
  username: 'teamwork'
}
 
 */
