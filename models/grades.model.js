const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  subject: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
    required: [true, "subject is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  value: {
    type: Number,
    min: [0],
    max: [10],
  },
});

module.exports = mongoose.model("Grades", schema);
