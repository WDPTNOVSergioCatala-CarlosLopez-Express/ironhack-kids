const User = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const alert = require('alert')

module.exports.create = (req, res) => {
  res.render("users/newUser");
};

module.exports.doCreate = (req, res, next) => {
  function renderWithErrors(errors) {
    res.render("users/newUser", { errors, user: req.body });
  }
  if (req.file) {
    req.body.profilePic = req.file.path;
  }
  delete req.body.role;

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        renderWithErrors({ email: "email already registered" });
      } else if (req.body.code === process.env.TEACHER_CODE) {
        req.body.role = "teacher";
        return User.create(req.body).then(() => res.redirect("/login"));
      } else {
        req.body.role = "student";
        return User.create(req.body).then(() => res.redirect("/login"));
      }
    })
    .catch((error) => {
      console.log(error);
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);
      } else {
        next(error);
      }
    });
};

const sessions = {};

module.exports.login = (req, res) => {
  res.render("users/login");
};

module.exports.doLogin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        bcrypt
          .compare(req.body.password, user.password)
          .then((ok) => {
            if (ok) {
              req.session.userId = user.id;
              if (user.role === "teacher") {
                res.redirect("/lobby");
              } else {
                res.redirect("/classroom");
              }
            } else {
              const errors = { password: "Incorrect password" };
              res.render("users/login", { errors, user: req.body });
            }
          })
          .catch(next);
      } else {
        const errors = { email: "This email is not registered" };
        res.render("users/login", { errors, user: req.body });
      }
    })
    .catch(next);
};

module.exports.user = (req, res, next) => {
  res.render("users/user");
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  req.session = null;
  res.redirect("/login");
};

module.exports.edit = (req, res, next) => {
  const userId = req.user._id;
  const { name, lastName, personalID, phoneNumber } = req.body;
  console.log(req.body);

  User.findByIdAndUpdate(
    userId,
    {
      ...(name && { name }),
      ...(lastName && { lastName }),
      ...(personalID && { personalID }),
      ...(phoneNumber && { phoneNumber }),
    },
    { new: true }
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.redirect("/user");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    });
};

module.exports.passwordUpdate = (req, res, next) => {
  User.findOne({ email: res.locals.currentUser.email })
    .then((user) => {
      if (user) {
        bcrypt
          .compare(req.body.actualPassword, user.password)
          .then((ok) => {
            if (ok) {
              if (req.body.confirmPassword === req.body.newPassword) {
                req.user.save()
                if (!password) {
                  delete req.body.newPassword
                }
                const user = Object.assign(req.user, req.body.newPassword)
                user.save()
                .then(user => res.redirect('/user'))
                .catch(next)
              } else {
                alert("Las contraseñas no coinciden");
              }
            } else {
              alert("Contraseña actual incorrecta");
            }
          })
          .catch(next);
      } else {
        next
      }
    })
    .catch(next);
};
