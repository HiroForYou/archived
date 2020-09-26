const httpStatus = require("http-status-codes");
const mongoose = require("mongoose");
const Publisher = require("../models/Publisher");
const Model = require("../models/Model");
const Collection = require("../models/Collection");
const { successJSON, errorJSON } = require("./utils");

exports.publishers = (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 15;
  const skip = (parseInt(req.query.page || 1, 10) - 1) * limit;
  Publisher.aggregate([
    {
      $lookup: {
        from: "collections",
        localField: "_id",
        foreignField: "publisherId",
        as: "collections",
      },
    },
    {
      $lookup: {
        from: "models",
        localField: "_id",
        foreignField: "publisherId",
        as: "models",
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        imageLink: 1,
        description: 1,
        collectionCount: { $size: "$collections" },
        modelCount: { $size: "$models" },
      },
    },
    { $skip: skip },
    { $limit: limit },
  ])
    .exec()
    .then((publishers) => successJSON(res, httpStatus.OK, publishers))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.publisher = (req, res, next) => {
  const { id } = req.params;
  Publisher.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: "collections",
        localField: "_id",
        foreignField: "publisherId",
        as: "collections",
      },
    },
    {
      $lookup: {
        from: "models",
        localField: "_id",
        foreignField: "publisherId",
        as: "models",
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        imageLink: 1,
        description: 1,
        collectionCount: { $size: "$collections" },
        modelCount: { $size: "$models" },
      },
    },
  ])
    .exec()
    .then((publishers) =>
      successJSON(
        res,
        httpStatus.OK,
        publishers.length > 0 ? publishers[0] : {}
      )
    )
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.create = (req, res, next) => {
  const publisher = new Publisher(req.body);
  publisher
    .save()
    .then((publisherCreated) =>
      successJSON(res, httpStatus.CREATED, publisherCreated)
    )
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.update = (req, res, next) => {
  const { id } = req.params;
  Publisher.findByIdAndUpdate(id, {
    $set: {
      name: req.body.name,
      description: req.body.description,
      imageLink: req.body.imageLink,
    },
  })
    .exec()
    .then((result) => {
      if (result) successJSON(res, httpStatus.NO_CONTENT, null);
      else
        errorJSON(
          res,
          httpStatus.UNPROCESSABLE_ENTITY,
          "Incorrect Publisher ID",
          null
        );
    })
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.delete = (req, res, next) => {
  const { id } = req.params;
  Publisher.findByIdAndDelete(id)
    .exec()
    .then((result) => {
      if (result) successJSON(res, httpStatus.NO_CONTENT, null);
      else
        errorJSON(
          res,
          httpStatus.UNPROCESSABLE_ENTITY,
          "Incorrect Publisher ID",
          null
        );
    })
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.getModelsByPublisher = (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 15;
  const skip = (parseInt(req.query.page || 1, 10) - 1) * limit;
  const { id } = req.params;
  Model.aggregate([
    { $match: { publisherId: mongoose.Types.ObjectId(id) } },
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
    { $skip: skip },
    { $limit: limit },
  ])
    .exec()
    .then((publisherModels) => successJSON(res, httpStatus.OK, publisherModels))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.getCollectionsByPublisher = (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 15;
  const skip = (parseInt(req.query.page || 1, 10) - 1) * limit;
  const { id } = req.params;
  Collection.find({ publisherId: id })
    .skip(skip)
    .limit(limit)
    .exec()
    .then((publisherCollections) =>
      successJSON(res, httpStatus.OK, publisherCollections)
    )
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};
