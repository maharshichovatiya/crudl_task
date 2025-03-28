const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Student = sequelize.define(
  "Student",
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "students",
    timestamps: false,
  }
);

module.exports = Student;
  