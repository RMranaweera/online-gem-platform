const mongoose = require("mongoose");

const GemSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String },
  description: { type: String },
  colour: { type: String },
  imagePath: { type: String },
  documentPath: { type: String },

  startTime: { type: Date },
  endTime: { type: Date },
  bid: { type: Number },
});

const Gem = mongoose.model("Gem", GemSchema);

module.exports = Gem;
