const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    },
  phone:{
    type: String
    },
    type: {
        type: String,
        default: "Personal"
  },
  date: {
    type: Date,
    dafault: Date.now,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
