const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "message is required"],
    },
    userFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
    userTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", schema);

/*

GET /users/:îd/chat

chat = (req, res, next) => {
  Message.find({
    $or: [
      { userFrom: req.params.id, userTo: req.user.id},
      { userFrom: req.user.id, userTo: req.params.id }
    ]
  })
}

*/
