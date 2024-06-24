// Choukai.js
const mongoose = require("mongoose");

const choukaiSchema = new mongoose.Schema({
  number: Number,
  audio: String,
  questionText: String,
  attach: [
    {
      answerAttach: String,
    },
  ],
  answerOptions: [
    {
      answerText: String,
      isCorrect: Boolean,
    },
  ],
});

module.exports = mongoose.model("Choukai", choukaiSchema);
