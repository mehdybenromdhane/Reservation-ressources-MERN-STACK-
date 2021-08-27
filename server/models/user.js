const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  tel: Number,
  role: String,
  date: {
    type: Date,
    default: Date.now,
  },
  adress: String,
  city: String,
  Country: String,
  postalCode: Number,
  Skills: Array,
  Language: Array,
  AboutMe: String,
});

module.exports = mongoose.model("user", userSchema, "user");
