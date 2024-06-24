import mongoose from "mongoose";

const goiSchema = mongoose.Schema(
  {
    number: { type: Number, required: true },
    attach: { type: String, required: true },
    answerOptions: [
      {
        answerText: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      },
    ],
  },
  { collection: "goi" }
);

export const Goi = mongoose.model("Goi", goiSchema);
