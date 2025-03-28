const sequelize = require("../db");
const Student = require("./student");
const Enrollment = require("./enrollment");

Student.hasMany(Enrollment, { foreignKey: "student_id", as: "enrollments" });
Enrollment.belongsTo(Student, { foreignKey: "student_id", as: "student" });

const db = { sequelize, Student, Enrollment };
module.exports = db;
