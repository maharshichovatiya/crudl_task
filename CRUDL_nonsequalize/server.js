const express = require("express");
const helmet = require("helmet");
const studentsRouter = require("./routes/students");
const enrollmentsRouter = require("./routes/enrollments");
const swaggerDocs = require("./swagger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(helmet());

app.use("/students", studentsRouter);
app.use("/enrollments", enrollmentsRouter);

swaggerDocs(app, PORT);

app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("Welcome to the Student Management API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
