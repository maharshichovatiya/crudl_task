const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");

function swaggerDocs(app, port) {
  const swaggerDocument = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./docs/swagger.json"), "utf8")
  );

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
