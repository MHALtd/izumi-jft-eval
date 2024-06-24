const mongoose = require("mongoose");

const bunpouSchema = new mongoose.Schema({
  number: Number,
  attach: String,
  answerOptions: [
    {
      answerText: String,
      isCorrect: Boolean,
    },
  ],
});

module.exports = mongoose.model("Bunpou", bunpouSchema);
