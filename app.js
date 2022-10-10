const express = require("express"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const app = express();
const port = 3007;

const options = {
  definition: {
    info: {
      title: "ajg",
      version: "1.0.0",
      description: "Ini descriptionnya bgsd",
    },
  },
  apis: ["app.js"],
};

const specs = swaggerJsdoc(options);

app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
