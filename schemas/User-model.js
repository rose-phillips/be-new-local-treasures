const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    firstname: String,
    lastname: String,
    age: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
