const express = require("express");
const bodyParser = require("body-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const httpStatus = require("http-status-codes");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("../api/routes/v1");
const logger = require("./logger");
const { validateHeaders } = require("../api/controllers/utils");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());

app.use(methodOverride());

app.use(helmet());

app.use(cors());

app.use(validateHeaders);

app.use("/v1", routes);

app.use((req, res, next) => {
  logger.warn(`not found: ${req.url}`);
  res.status(httpStatus.NOT_FOUND);
  res.json({
    error: "Not Found",
  });
});

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    error: err && err.message ? err.message : "Some error. Try again",
  });
});

module.exports = app;
