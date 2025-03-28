const express = require("express");
const {
  createEnrollment,
  getEnrollments,
  getAllEnrollments,
  updateEnrollment,
  deleteEnrollment,
} = require("../controllers/enrollmentController");
const validate = require("../middlewares/validate");
const { enrollmentSchema } = require("../schemas/validationSchemas");

const router = express.Router();

router.post("/", validate(enrollmentSchema), createEnrollment);
router.get("/", getAllEnrollments);
router.get("/:id", getEnrollments);
router.put("/:id", updateEnrollment);
router.delete("/:id", deleteEnrollment);

module.exports = router;

