const Subject = require('../models/subject.model');
const User = require('../models/user.model');

module.exports.gradesStudent = (req, res) => {
  const studentId = res.locals.currentUser._id;

  Subject.find({ students: studentId })
    .populate({
      path: 'teacher',
      select: 'name email profilePic lastName',
      model: 'User',
    })
    .exec()
    .then((subjects) => {
      const teachers = subjects.map((subject) => subject.teacher);
      console.log(teachers, subjects)
      res.render('gradesStudent', { teachers, subjects });
    })
    .catch((error) => {
      res.render('error');
    });
};