const User = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

module.exports.create = (req, res) => {
  res.render("users/newUser");
};

module.exports.doCreate = (req, res, next) => {
  function renderWithErrors(errors) {
    res.render("users", { errors, user: req.body });
  }

  delete req.body.role;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        renderWithErrors({ email: "email already registered" });
      } else if (req.body.code === TEACHER_CODE) {
        req.body.role = 'teacher'
        return User.create(req.body).then(() => res.redirect("/login"));
      } else {
        req.body.role = 'student'
        return User.create(req.body).then(() => res.redirect("/login"));
      }
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);
      } else {
        next(error);
      }
    });
};

module.exports.login = (req, res) => {
    res.render('users/login');
  };
