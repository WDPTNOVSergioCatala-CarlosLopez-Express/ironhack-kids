const Subject = require("../models/subject.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");

module.exports.lobby = (req, res, next) => {
  Subject.find({ teacher: req.user._id })
    .populate({
      path: "students",
      model: User,
    })
    .then((subjects) => {
      const students = subjects.reduce((acc, subject) => {
        subject.students.forEach((student) => {
          acc.push({
            ...student.toObject(),
            subjectId: subject._id,
            subjectName: subject.name,
          });
        });
        return acc;
      }, []);
      res.render("lobby", { students });
    })
    .catch(next);
};
