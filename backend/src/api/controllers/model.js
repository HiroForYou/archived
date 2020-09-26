const httpStatus = require("http-status-codes");
const mongoose = require("mongoose");
const Model = require("../models/Model");
const { successJSON, errorJSON } = require("./utils");

exports.models = (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 15;
  const skip = (parseInt(req.query.page || 1, 10) - 1) * limit;
  Model.aggregate([
    {
      $lookup: {
        from: "publishers",
        localField: "publisherId",
        foreignField: "_id",
        as: "publisher",
      },
    },
    {
      $lookup: {
        from: "collections",
        localField: "collectionId",
        foreignField: "_id",
        as: "collection",
      },
    },
    {
      $lookup: {
        from: "tasks",
        localField: "taskId",
        foreignField: "_id",
        as: "task",
      },
    },
    { $sort: { 'size': 1 } },
    { $skip: skip },
    { $limit: limit },
  ])
    .exec()
    .then((models) => successJSON(res, httpStatus.OK, models))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.model = (req, res, next) => {
  const { id } = req.params;
  Model.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: "publishers",
        localField: "publisherId",
        foreignField: "_id",
        as: "publisher",
      },
    },
    {
      $lookup: {
        from: "collections",
        localField: "collectionId",
        foreignField: "_id",
        as: "collection",
      },
    },
    {
      $lookup: {
        from: "tasks",
        localField: "taskId",
        foreignField: "_id",
        as: "task",
      },
    },
  ])
    .exec()
    .then((models) =>
      successJSON(res, httpStatus.OK, models.length > 0 ? models[0] : {})
    )
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.create = (req, res, next) => {
  const model = new Model(req.body);
  model
    .save()
    .then((modelCreated) => successJSON(res, httpStatus.CREATED, modelCreated))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.update = (req, res, next) => {
  const { id } = req.params;
  Model.findByIdAndUpdate(id, {
    $set: {
      name: req.body.name,
      description: req.body.description,
      publisherId: req.body.publisherId,
      taskId: req.body.taskId,
      imageLink: req.body.imageLink,
      paperLink: req.body.paperLink,
      sourceLink: req.body.sourceLink,
      downloadLink: req.body.downloadLink,
      size: req.body.size,
    },
  })
    .exec()
    .then((result) => {
      if (result) successJSON(res, httpStatus.NO_CONTENT, null);
      else
        errorJSON(
          res,
          httpStatus.UNPROCESSABLE_ENTITY,
          "Incorrect Model ID",
          null
        );
    })
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.delete = (req, res, next) => {
  const { id } = req.params;
  Model.findByIdAndDelete(id)
    .exec()
    .then((result) => {
      if (result) successJSON(res, httpStatus.NO_CONTENT, null);
      else
        errorJSON(
          res,
          httpStatus.UNPROCESSABLE_ENTITY,
          "Incorrect Model ID",
          null
        );
    })
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};
