const httpStatus = require("http-status-codes");
const Collection = require("../models/Collection");
const { successJSON, errorJSON } = require("./utils");

exports.collections = (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 15;
  const skip = (parseInt(req.query.page || 1, 10) - 1) * limit;
  Collection.find({})
    .skip(skip)
    .limit(limit)
    .exec()
    .then((collections) => successJSON(res, httpStatus.OK, collections))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.collection = (req, res, next) => {
  const { id } = req.params;
  Collection.findById(id)
    .exec()
    .then((collection) => successJSON(res, httpStatus.OK, collection))
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.create = (req, res, next) => {
  const collection = new Collection(req.body);
  collection
    .save()
    .then((collectionCreated) =>
      successJSON(res, httpStatus.CREATED, collectionCreated)
    )
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.update = (req, res, next) => {
  const { id } = req.params;
  Collection.findByIdAndUpdate(id, {
    $set: {
      name: req.body.name,
      description: req.body.description,
    },
  })
    .exec()
    .then((result) => {
      if (result) successJSON(res, httpStatus.NO_CONTENT, null);
      else
        errorJSON(
          res,
          httpStatus.UNPROCESSABLE_ENTITY,
          "Incorrect Collection ID",
          null
        );
    })
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};

exports.delete = (req, res, next) => {
  const { id } = req.params;
  Collection.findByIdAndDelete(id)
    .exec()
    .then((result) => {
      if (result) successJSON(res, httpStatus.NO_CONTENT, null);
      else
        errorJSON(
          res,
          httpStatus.UNPROCESSABLE_ENTITY,
          "Incorrect Collection ID",
          null
        );
    })
    .catch((err) =>
      errorJSON(res, httpStatus.INTERNAL_SERVER_ERROR, null, err)
    );
};
