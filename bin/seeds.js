// Iteration #1
const mongoose = require('mongoose')
require('dotenv').config();
require("../config/db.config");


const Subject = require("../models/subject.model");
const subjects = [
  { name: "Matemáticas", teacher: ["63f0caa5a0ce175d0c63d5a6"], students: ["63f0cad8a0ce175d0c63d5a9"] },
  { name: "Lengua", teacher: [], students: [] },
  { name: "Ingles", teacher: [], students: [] },
];

Subject.create(subjects).then(() => {
  console.log("Subject Created");
});

