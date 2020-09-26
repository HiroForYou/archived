const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
    researchArea: {
      type: String,
      required: true,
      enum: ["Vision", "Nlp", "Audio", "Generative"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema, "tasks");
