const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  u_id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
   },
  // email: {
  //   type: String,
  // },
  // userName: { type: String },
  // address: { type: String },
  // gender: { type: String },

  // password: {
  //   type: String,
  // },
  // role: {
  //   type: String,
  // },
  // date: { type: String },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
