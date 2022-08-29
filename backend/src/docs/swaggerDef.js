/*
   docs Name : swaggerDef
*/

const { version } = require("../../package.json");

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "Whizlabs",
    description: "28/08/2022",
    version,
    license: {
      name: "Whizlabs",
      url: "",
    },
  },
  servers: [
    {
      url: `http://localhost:3001/v1`,
    },
  ],
};

module.exports = swaggerDef;
