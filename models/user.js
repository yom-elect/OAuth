import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String
});

module.exports = mongoose.model("user", userSchema);
