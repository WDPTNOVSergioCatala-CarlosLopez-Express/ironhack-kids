// Iteration #1
const mongoose = require('mongoose')
require('dotenv').config();
require("../config/db.config");


const Grade = require("../models/grades.model");
const Grades = [
  { subject: "640343adf4ff7cb81c10f7aa", user: "63f0cad8a0ce175d0c63d5a9", value: 0 },
  { subject: "640343adf4ff7cb81c10f7ab", user: "63f0cad8a0ce175d0c63d5a9", value: 1 },
  { subject: "640343adf4ff7cb81c10f7ac", user: "63f0cad8a0ce175d0c63d5a9", value: 2 },
  { subject: "640343adf4ff7cb81c10f7ad", user: "63f0cad8a0ce175d0c63d5a9", value: 3 },
  { subject: "640343adf4ff7cb81c10f7a8", user: "63f0cad8a0ce175d0c63d5a9", value: 4 },
  { subject: "640343adf4ff7cb81c10f7a9", user: "63f0cad8a0ce175d0c63d5a9", value: 5 },
  { subject: "640343adf4ff7cb81c10f7b0", user: "63f0cad8a0ce175d0c63d5a9", value: 6 },
  { subject: "640343adf4ff7cb81c10f7b1", user: "63f0cad8a0ce175d0c63d5a9", value: 7 },
  { subject: "640343adf4ff7cb81c10f7ae", user: "63f0cad8a0ce175d0c63d5a9", value: 8 },
  { subject: "640343adf4ff7cb81c10f7af", user: "63f0cad8a0ce175d0c63d5a9", value: 9 },
];

Grade.create(Grades).then(() => {
  console.log("Grades Created");
});

