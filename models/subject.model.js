const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  teacher: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  students: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    validate: [arrayLimit, `Subject exceeds the limit of 40 students`],
  },
});

function arrayLimit(val) {
  return val.length <= 40;
}

module.exports = mongoose.model("Subject", schema);
