const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const validate = require("../middlewares/validate");
const { studentSchema } = require("../schemas/validationSchemas");
const asyncHandler = require("../middlewares/asyncHandler");

router.post(
  "/",
  validate(studentSchema),
  asyncHandler(studentController.createStudent)
);
router.get("/", asyncHandler(studentController.getAllStudents));
router.get("/:id", asyncHandler(studentController.getStudent));
router.put(
  "/:id",
  validate(studentSchema),
  asyncHandler(studentController.updateStudent)
);
router.delete("/:id", asyncHandler(studentController.deleteStudent));

module.exports = router;
