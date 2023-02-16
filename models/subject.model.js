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
    type: Array,
    required: [true, "student is required"],
  },
});

module.exports = mongoose.model("Subject", schema);
