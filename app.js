const express = require("express"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const app = express();
const port = 3007;
const swaggerOptions = require("./swaggerOptions.json");

const options = {
  definition: swaggerOptions,
  apis: ["app.js"],
};

const specs = swaggerJsdoc(options);

app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
