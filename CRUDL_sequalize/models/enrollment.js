const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Enrollment = sequelize.define(
  "Enrollment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "student_id",
      references: {
        model: "students",
        key: "id",
      },
      validate: {
        notNull: {
          msg: "student_id is required",
        },
      },
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "course_name",
    },
  },
  {
    tableName: "enrollments",
    timestamps: false,
  }
);

module.exports = Enrollment;
