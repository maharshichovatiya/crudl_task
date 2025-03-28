const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mahars09@",
  database: "student_management",
});
connection.connect((err) => {
  if (err) console.error(err);
  else console.log("Database Connected Sucessfully");
});
module.exports = connection;
