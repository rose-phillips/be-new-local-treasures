const { mongoose, Schema } = require("mongoose");

const statsSchema = new Schema(
  {
    hunt: { type: String, required: true },
    date: {type: Date, required: true},
    time: {type: Number, required: true},
    username: {type: String, required: true}
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
