const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "message is required"],
    },
    participants: { 
        type: String
    },
    teachers: {
        type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", schema);
