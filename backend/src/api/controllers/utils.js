const logger = require("../../config/logger");

exports.successJSON = (res, statusCode, body) => {
  res.status(statusCode);
  res.json(body);
};

exports.errorJSON = (res, statusCode, message, err) => {
  logger.error(err);
  res.status(statusCode);
  res.json({
    error: message !== null ? message : "Some error. Try again",
  });
};

exports.validateHeaders = (req, res, next) => {
  if (
    process.env.HEADERS_ACCEPT &&
    req.headers.accept &&
    req.headers.accept.toLowerCase().replace(/\s/g, "") !==
      process.env.HEADERS_ACCEPT.toLowerCase().replace(/\s/g, "")
  ) {
    throw new Error("Incorrect request headers");
  } else next();
};
