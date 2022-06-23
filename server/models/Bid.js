const mongoose = require("mongoose");

const BidSchema = new mongoose.Schema({
  _id: { type: String },
  gId: { type: String },
  userId: { type: String },
  bid: { type:Number },
});

const Bid = mongoose.model("Bid", BidSchema);

module.exports = Bid;
