const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const serviceSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  owner: String,

  date: {
    type: Date,
    default: Date.now,
  },
  photo: {
    type: String,
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "categorie",
  },
});

module.exports = mongoose.model("service", serviceSchema, "service");
