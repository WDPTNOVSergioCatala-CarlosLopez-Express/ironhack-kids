require("../config/db.config");

const Subject = require("../models/subject.model");

Subjects.deleteMany().then(() => {
    Subjects.push({
      name: `Matematicas`,
      teacher: "",
      students: []
    });
    Subjects.push({
        name: `Lengua`,
        teacher: "",
        students: []
      });
      Subjects.push({
        name: `Ingles`,
        teacher: "",
        students: []
      });
      Subjects.push({
        name: `Educacion fisica`,
        teacher: "",
        students: []
      });
  

  Subjects.create(subjects).then(() => {
    console.log("subjects created");
  });
});
