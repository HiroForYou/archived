const httpStatus = require("http-status-codes");
const Task = require("../models/Task");
const Model = require("../models/Model");
const { successJSON, errorJSON } = require("./utils");

exports.tasks = (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 15;
  const skip = (parseInt(req.query.page || 1, 10) - 1) * limit;
  Task.find({})
    .skip(skip)
    .limit(limit)
    .exec()
    .then((tasks) => successJSON(res, httpStatus.OK, tasks))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.task = (req, res, next) => {
  const { id } = req.params;
  Task.findById(id)
    .exec()
    .then((task) => successJSON(res, httpStatus.OK, task))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.getModelsByTask = (req, res, next) => {
  const { id } = req.params;
  Model.find({ taskId: id }).sort({'size': 1})
    .exec()
    .then((models) => successJSON(res, httpStatus.OK, models))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};
