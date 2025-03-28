const db = require("../db");
const asyncHandler = require("../middlewares/asyncHandler");

exports.createStudent = asyncHandler(async (req, res, next) => {
  const { first_name, last_name, email, phone_number, date_of_birth } =
    req.body;

  db.query(
    "SELECT * FROM students WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const sql =
        "INSERT INTO students (first_name, last_name, email, phone_number, date_of_birth) VALUES (?, ?, ?, ?, ?)";

      db.query(
        sql,
        [first_name, last_name, email, phone_number, date_of_birth],
        (err, result) => {
          if (err) return next(err);
          res.status(201).json({
            message: "Student added successfully",
            id: result.insertId,
          });
        }
      );
    }
  );
});

exports.getAllStudents = asyncHandler(async (req, res, next) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return next(err);
    res.json(results);
  });
});

exports.getStudent = asyncHandler(async (req, res, next) => {
  db.query(
    "SELECT * FROM students WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return next(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Student not found" });
      res.json(result[0]);
    }
  );
});

exports.updateStudent = asyncHandler(async (req, res, next) => {
  const { first_name, last_name, email, phone_number, date_of_birth } =
    req.body;
  const sql =
    "UPDATE students SET first_name = ?, last_name = ?, email = ?, phone_number = ?, date_of_birth = ? WHERE id = ?";

  db.query(
    sql,
    [first_name, last_name, email, phone_number, date_of_birth, req.params.id],
    (err, result) => {
      if (err) return next(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Student not found" });
      res.json({ message: "Student updated successfully" });
    }
  );
});

exports.deleteStudent = asyncHandler(async (req, res, next) => {
  const studentId = req.params.id;

  db.query(
    "DELETE FROM enrollments WHERE student_id = ?",
    [studentId],
    (err) => {
      if (err) return next(err);

      db.query(
        "DELETE FROM students WHERE id = ?",
        [studentId],
        (err, result) => {
          if (err) return next(err);
          if (result.affectedRows === 0)
            return res.status(404).json({ message: "Student not found" });

          res.json({
            message: "Student and related enrollments deleted successfully",
          });
        }
      );
    }
  );
});
