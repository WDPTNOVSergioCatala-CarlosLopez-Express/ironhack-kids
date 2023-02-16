const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    subject: {
      type: String,
      required: [true, "subject is required"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    value: {
      type: Number,
    },
  }
);

module.exports = mongoose.model("Grades", schema);
