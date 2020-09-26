Promise = require("bluebird"); // eslint-disable-line no-global-assign
require("dotenv-safe").config();
const logger = require("./config/logger");
const app = require("./config/express");
const database = require("./config/database");

database.Connect();

app.listen(process.env.PORT, () =>
  logger.info(`server started on port ${process.env.PORT}`)
);

module.exports = app;
