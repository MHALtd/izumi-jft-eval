// Goi.js
const mongoose = require("mongoose");

const goiSchema = new mongoose.Schema({
  number: Number,
  attach: String,
  answerOptions: [
    {
      answerText: String,
      isCorrect: Boolean,
    },
  ],
});

module.exports = mongoose.model("Goi", goiSchema);
