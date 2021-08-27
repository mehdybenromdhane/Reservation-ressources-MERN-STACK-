const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const eventSchema = new Schema({
  title: String,
  start: Date,
  end: Date,
});

module.exports = mongoose.model("event", eventSchema, "event");
