const Subject = require("../models/subject.model");
const User = require("../models/user.model");

exports.gestion = (req, res, next) => {
  let subjects, students;

  Subject.find()
    .then((result) => {
      subjects = result;
      return User.find({ role: "student" });
    })
    .then((result) => {
      students = result;
      console.log(subjects, students);
      res.render("gestion", { subjects, students });
    })
    .catch(next);
};

exports.addStudent = (req, res, next) => {
  const { subject, student } = req.body;
  Subject.findByIdAndUpdate(
    subject,
    { $addToSet: { students: student } },
    { new: true }
  )
    .populate("students", "name lastName")
    .then((updatedSubject) => {
      if (!updatedSubject) {
        return res.status(404).send("Subject not found");
      }

      res.redirect("/gestion");
    })
    .catch(next);
};
exports.removeStudent = (req, res, next) => {
  const criteria = {};

  if (req.body.subject && req.body.student ) {
    criteria.subject = req.body.subject;
    criteria.student = req.body.student;
  } else {
    criteria.subject = req.params.subjectId;
    criteria.student = req.params.studentId;
    
  }

  Subject.findByIdAndUpdate(
    criteria.subject,
    { $pull: { students: criteria.student } },
    { new: true }
  )
    .then((updatedSubject) => {
      if (!updatedSubject) {
        return res.status(404).send("Subject not found");
      }
      const path  = req.body.path ? "/gestion" : "/lobby"
      return res.redirect(path);
    })
    .catch((err) => {
      next(err);
    });
};
