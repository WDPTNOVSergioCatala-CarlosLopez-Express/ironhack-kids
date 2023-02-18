const Schema = mongoose.Schema;
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  teacher: {
    type: String,
    required: [true, "teacher is required"],
  },
  students: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }],
    validate: [arrayLimit, `${PATH} exceeds the limit of 40`]
  },
});

function arrayLimit(val) {
  return val.length <= 40;
}

module.exports = mongoose.model("Subject", schema);
