import mongoose from "mongoose";

const bunpouSchema = mongoose.Schema(
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
  { collection: "bunpou" }
);

export const Bunpou = mongoose.model("Bunpou", bunpouSchema);
