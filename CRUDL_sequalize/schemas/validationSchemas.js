const joi = require("joi");

exports.studentSchema = joi.object({
  first_name: joi.string().min(2).max(50).required(),
  last_name: joi.string().min(2).max(50).required(),
  email: joi.string().email().required(),
  phone_number: joi
    .string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  date_of_birth: joi.date().required(),
});

exports.enrollmentSchema = joi.object({
  student_id: joi.number().integer().required(),
  course_name: joi.string().min(2).max(100).required(),
});

exports.updateEnrollmentSchema = joi.object({
  course_name: joi.string().required(),
});
