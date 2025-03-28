const Student = require("../models/student");

exports.createStudent = async (req, res, next) => {
  try {
    const { email, first_name, last_name, phone_number, date_of_birth } =
      req.body;
    const existingStudent = await Student.findOne({ where: { email } });
    if (existingStudent) {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    }
    const student = await Student.create({
      first_name,
      last_name,
      email,
      phone_number,
      date_of_birth,
    });
    res
      .status(201)
      .json({ message: "Student added successfully", id: student.id });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    }
    next(err);
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
};

exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      console.log(`Attempting to get student with ID: ${req.params.id}`);
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    next(err);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const [updated] = await Student.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student updated successfully" });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        success: false,
        message: "Email already exists. Please use a different email.",
      });
    }
    next(err);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const deleted = await Student.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    next(err);
  }
};
