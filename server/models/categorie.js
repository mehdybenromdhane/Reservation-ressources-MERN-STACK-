const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const categorieSchema = new Schema({
  name: String,

  date: {
    type: Date,
    default: Date.now,
  },

  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "service",
    },
  ],
});

module.exports = mongoose.model("categorie", categorieSchema, "categorie");
