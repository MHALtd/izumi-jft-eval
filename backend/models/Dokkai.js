// Dokkai.js
const mongoose = require("mongoose");

const dokkaiSchema = new mongoose.Schema({
  number: Number,
  attach: String,
  questionText: String,
  answerOptions: [
    {
      answerText: String,
      isCorrect: Boolean,
    },
  ],
});

module.exports = mongoose.model("Dokkai", dokkaiSchema);
