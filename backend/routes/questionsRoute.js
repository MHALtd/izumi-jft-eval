import express from "express";
import { Bunpou } from "../models/Bunpou.js";
import { Choukai } from "../models/Choukai.js";
import { Dokkai } from "../models/Dokkai.js";
import { Goi } from "../models/Goi.js";

const router = express.Router();

// Route for get all Bunpou questions

router.get("/bunpou", async (request, response) => {
  try {
    const questions = await Bunpou.find({});

    return response.status(200).json({
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for get all Choukai questions
router.get("/choukai", async (request, response) => {
  try {
    const questions = await Choukai.find({});

    return response.status(200).json({
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for get all Dokkai questions
router.get("/dokkai", async (request, response) => {
  try {
    const questions = await Dokkai.find({});

    return response.status(200).json({
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for get all Goi questions
router.get("/goi", async (request, response) => {
  try {
    const questions = await Goi.find({});

    return response.status(200).json({
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
