const { createLogger, format, transports } = require("winston");

const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, time }) => {
  return `${time} ${level.toUpperCase()}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),
  level: "info",
  transports: [new transports.File({ filename: "torchexpo.log" })],
});

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

module.exports = logger;
