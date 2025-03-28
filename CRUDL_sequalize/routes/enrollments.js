const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");
const validate = require("../middlewares/validate");
const {
  enrollmentSchema,
  updateEnrollmentSchema,
} = require("../schemas/validationSchemas");
const asyncHandler = require("../middlewares/asyncHandler");

router.post(
  "/",
  validate(enrollmentSchema),
  asyncHandler(enrollmentController.createEnrollment)
);
router.get("/", asyncHandler(enrollmentController.getAllEnrollments));
router.get("/:id", asyncHandler(enrollmentController.getEnrollmentById));
router.put(
  "/:enrollmentId",
  validate(updateEnrollmentSchema),
  asyncHandler(enrollmentController.updateEnrollment)
);
router.delete(
  "/:enrollmentId",
  asyncHandler(enrollmentController.deleteEnrollment)
);
module.exports = router;
