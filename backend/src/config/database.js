const mongoose = require("mongoose");
const logger = require("./../config/logger");

mongoose.Promise = Promise;

mongoose.connection.on("error", (err) => logger.error(`mongodb error: ${err}`));

mongoose.connection.on("disconnected", () =>
  logger.error("mongodb disconnected: ...")
);

mongoose.connection.on("reconnected", () =>
  logger.info("mongodb reconnected ...")
);

exports.Connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => logger.info(`mongodb connected: ${process.env.MONGO_URI}`));
  return mongoose.connection;
};
