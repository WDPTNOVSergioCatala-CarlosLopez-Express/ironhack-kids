const Subject = require("../models/subject.model");
const User = require("../models/user.model")
const mongoose = require("mongoose")

module.exports.gradesTeacher = (req, res, next) => {
    Subject.find({ teacher: mongoose.Types.ObjectId(req.user._id) })
    .populate({
      path: 'students',
      model: User // Registra el modelo 'user' en la llamada a populate()
    })
    .then((subjects) => {
      const students = subjects.reduce((acc, subject) => {
        acc.push(...subject.students);
        return acc;
      }, []);
      res.render("gradesTeacher", { students });
    })
    .catch(next);
};