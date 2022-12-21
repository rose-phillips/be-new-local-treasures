const { mongoose, Schema } = require("mongoose");

const huntSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    checkpoints: {
      1: { lat: Number, long: Number },
      2: { lat: Number, long: Number },
      3: { lat: Number, long: Number },
      4: { lat: Number, long: Number },
      5: { lat: Number, long: Number },
    },
    distance: { type: Number, required: true },
  },
  { timestamps: true }
);

const Hunt = mongoose.model("hunts", huntSchema);

module.exports = Hunt;

/*
 
{
  title: Hunt Demo,
  location: Leeds,
  checkpoints: {
    1: {
      lat: 00000000,
      long: 00000000,
    },
   2 : {
      lat: 1111111111,
      long: 11111111111,
    }
    3 : {
      lat: 222222222,
      long: 222222222,
    },
    distance: 3
  }
}
 
 */
