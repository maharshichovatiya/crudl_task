const express = require("express");
const {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const validate = require("../middlewares/validate");
const { studentSchema } = require("../schemas/validationSchemas");

const router = express.Router();

router.post("/", validate(studentSchema), createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudent);
router.put("/:id", validate(studentSchema), updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
