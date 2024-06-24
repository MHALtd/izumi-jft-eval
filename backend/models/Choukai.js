import mongoose from "mongoose";

const choukaiSchema = mongoose.Schema(
  {
    number: { type: Number, required: true },
    audio: { type: String, required: true },
    questionText: { type: String, required: true },
    attach: [
      {
        answerAttach: { type: String, required: true },
      },
    ],
    answerOptions: [
      {
        answerText: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      },
    ],
  },
  { collection: "choukai" }
);

export const Choukai = mongoose.model("Choukai", choukaiSchema);
