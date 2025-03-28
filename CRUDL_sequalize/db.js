const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("student_management", "root", "Mahars09@", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
