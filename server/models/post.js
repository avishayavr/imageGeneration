const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  // _id:String,
  username: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
  //   email: { type: String, required: false },
  //   phone: { type: String, required: false },
  //   password: { type: String, required: true },
  //   isAdmin: { type: Boolean, required: true },
  //   refreshToken: [{ type: String, required: false }],
});

const model = mongoose.model("posts", postSchema);
module.exports = model;
