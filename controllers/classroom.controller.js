const Subject = require("../models/subject.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");

module.exports.classroom = (req, res, next) => {
    Subject.find({ students: mongoose.Types.ObjectId(req.user._id) })
    .populate({
      path: 'teacher',
      model: User // Registra el modelo 'user' en la llamada a populate()
    })
    .populate('subject') // Agrega la población de la propiedad 'subject'
    .then((subjects) => {
      const teachers = subjects.reduce((acc, subject) => {
        subject.teacher.forEach((teacher) => {
          acc.push({
            teacher,
            subject: subject.subject // Agrega la propiedad 'subject' al objeto
          });
        });
        return acc;
      }, []);
      res.render("classroom", { teachers});
    })
    .catch(next);
};