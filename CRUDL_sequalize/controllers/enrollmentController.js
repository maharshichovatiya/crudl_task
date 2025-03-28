const { Enrollment, Student } = require("../models");

exports.createEnrollment = async (req, res, next) => {
  try {
    console.log("Request Body:", req.body);
    const { student_id, course_name } = req.body;

    if (!student_id || !course_name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const student = await Student.findByPk(student_id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const enrollment = await Enrollment.create({
      studentId: student_id,
      courseName: course_name,
    });

    res.status(201).json({
      message: "Enrollment added successfully",
      enrollment,
    });
  } catch (error) {
    console.error("Error creating enrollment:", error);
    next(error);
  }
};

exports.getAllEnrollments = async (req, res, next) => {
  try {
    const enrollments = await Enrollment.findAll({
      attributes: ["id", "studentId", "courseName"],
    });

    res.json(enrollments);
  } catch (error) {
    console.log("Error fetching enrollments:", error);
    next(error);
  }
};

exports.getEnrollmentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const enrollment = await Enrollment.findByPk(id, {
      attributes: ["id", "studentId", "courseName"],
      include: [
        {
          model: Student,
          as: "student",
          attributes: [],
        },
      ],
    });
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    res.json(enrollment);
  } catch (error) {
    console.log("Error fetching enrollment by ID:", error);
    next(error);
  }
};

exports.updateEnrollment = async (req, res, next) => {
  try {
    const { enrollmentId } = req.params;
    const { course_name } = req.body;

    console.log("Enrollment ID:", enrollmentId);
    console.log("New Course Name:", course_name);

    const enrollment = await Enrollment.findByPk(enrollmentId);
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    await Enrollment.update(
      { courseName: course_name },
      {
        where: { id: enrollmentId },
        fields: ["courseName"],
        individualHooks: true,
      }
    );

    const updatedEnrollment = await Enrollment.findByPk(enrollmentId);

    res.json({
      message: "Enrollment updated successfully",
    });
  } catch (error) {
    console.error("Error updating enrollment:", error);
    next(error);
  }
};

exports.deleteEnrollment = async (req, res, next) => {
  try {
    const deleted = await Enrollment.destroy({
      where: { id: req.params.enrollmentId },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    res.json({ message: "Enrollment deleted successfully" });
  } catch (err) {
    next(err);
  }
};
