const db = require("../db");
const asyncHandler = require("../middlewares/asyncHandler");

exports.createEnrollment = asyncHandler((req, res, next) => {
  const { student_id, course_name } = req.body;

  const checkStudentSql = "SELECT * FROM students WHERE id = ?";
  db.query(checkStudentSql, [student_id], (err, results) => {
    if (err) return next(err);

    if (results.length === 0) {
      return res.status(400).json({ message: "Student does not exist" });
    }

    const insertSql =
      "INSERT INTO enrollments (student_id, course_name) VALUES (?, ?)";
    db.query(insertSql, [student_id, course_name], (err, result) => {
      if (err) return next(err);
      res.status(201).json({
        message: "Enrollment added successfully",
        id: result.insertId,
      });
    });
  });
});

exports.getEnrollments = asyncHandler((req, res, next) => {
  const sql = "SELECT * FROM enrollments WHERE student_id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return next(err);

    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "No enrollments found for this student" });
    }

    res.json(result);
  });
});

exports.getAllEnrollments = asyncHandler((req, res, next) => {
  const sql = "SELECT * FROM enrollments";

  db.query(sql, (err, results) => {
    if (err) return next(err);
    res.json(results);
  });
});

exports.updateEnrollment = asyncHandler((req, res, next) => {
  const { course_name } = req.body;
  if (!course_name)
    return res.status(400).json({ error: "course_name is required" });

  db.query(
    "UPDATE enrollments SET course_name = ? WHERE id = ?",
    [course_name, req.params.id],
    (err, result) => {
      if (err) return next(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Enrollment not found" });

      res.json({ message: "Enrollment updated successfully" });
    }
  );
});

exports.deleteEnrollment = asyncHandler((req, res, next) => {
  const sql = "DELETE FROM enrollments WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return next(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Enrollment not found" });

    res.json({ message: "Enrollment deleted successfully" });
  });
});
