const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Admin', 'Editor', 'Viewer'],
      required: true,
    },
  },{timestamps:true});


  const user = mongoose.model("User",userSchema);

  module.exports = user;