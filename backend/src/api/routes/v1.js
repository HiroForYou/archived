const express = require("express");
const modelController = require("../controllers/model");
const collectionController = require("../controllers/collection");
const publisherController = require("../controllers/publisher");
const taskController = require("../controllers/task");

const router = express.Router();

// ROUTE: /v1/models
router
  .route("/models")
  .get(modelController.models)
router
  .route("/models/:id")
  .get(modelController.model)

// ROUTE: /v1/collections
router
  .route("/collections")
  .get(collectionController.collections)
router
  .route("/collections/:id")
  .get(collectionController.collection)

// ROUTE: /v1/publishers
router
  .route("/publishers")
  .get(publisherController.publishers)
router
  .route("/publishers/:id")
  .get(publisherController.publisher)
router
  .route("/publishers/:id/models")
  .get(publisherController.getModelsByPublisher);
router
  .route("/publishers/:id/collections")
  .get(publisherController.getCollectionsByPublisher);

// ROUTE: /v1/tasks
router.route("/tasks").get(taskController.tasks);
router.route("/tasks/:id").get(taskController.task);
router.route("/tasks/:id/models").get(taskController.getModelsByTask);

module.exports = router;
