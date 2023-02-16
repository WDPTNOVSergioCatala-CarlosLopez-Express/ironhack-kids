const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "message is required"],
  },
  user: { type: Schema.Types.objectId, required: [true, "user is required"] },
});

module.exports = mongoosse.model("PanelMessage", schema);
