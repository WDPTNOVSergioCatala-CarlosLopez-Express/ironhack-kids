const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "min length: 8"],
  },
  role: {
    type: String,
    enum: ["teacher", "student"],
    //required: [true, "role is required"],
  },
  profilePic: {
    type: String,
    required : true
  },
  phoneNumber: {
    type: Number,
  },
  personalID: {
    type: String,
    unique: true,
  },
});

schema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt
    .hash(this.password, 10)
    .then((encryptedPassword) => {
      this.password = encryptedPassword;
      next();
    })
    .catch(next)
  }else {
    next();
  }
});

module.exports = mongoose.model("User", schema);



