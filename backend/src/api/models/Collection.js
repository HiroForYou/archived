const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    publisherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publisher",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    models: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Model",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Collection", collectionSchema, "collections");
