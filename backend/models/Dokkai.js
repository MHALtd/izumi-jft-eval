import mongoose from "mongoose";

const dokkaiSchema = mongoose.Schema(
  {
    number: { type: Number, required: true },
    attach: { type: String, required: true },
    questionText: { type: String, required: true },
    answerOptions: [
      {
        answerText: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      },
    ],
  },
  { collection: "dokkai" }
);

export const Dokkai = mongoose.model("Dokkai", dokkaiSchema);
