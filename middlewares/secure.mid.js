module.exports.requireLogin = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  } else {
    res.redirect("/login");
  }
};

module.exports.requireTeacher = (req, res, next) => {
  if (res.locals.currentUser.role === "teacher") {
    return next();
  } else {
    res.redirect("/home");
  }
};

module.exports.requireStudent = (req, res, next) => {
  if (res.locals.currentUser.role === "student") {
    return next();
  } else {
    res.redirect("/home");
  }
};
