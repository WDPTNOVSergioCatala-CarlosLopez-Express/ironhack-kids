const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "message is required"],
  },
  user: { type: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  required: [true, "user is required"] },
});

module.exports = mongoose.model("Message", schema);
