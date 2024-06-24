const Bunpou = require("../models/Bunpou");
const Choukai = require("../models/Choukai");
const Dokkai = require("../models/Dokkai");
const Goi = require("../models/Goi");

const getBunpouQuestions = async (req, res) => {
  try {
    const questions = await Bunpou.find();
    res.json(questions);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getChoukaiQuestions = async (req, res) => {
  try {
    const questions = await Choukai.find();
    res.json(questions);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDokkaiQuestions = async (req, res) => {
  try {
    const questions = await Dokkai.find();
    res.json(questions);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGoiQuestions = async (req, res) => {
  try {
    const questions = await Goi.find();
    res.json(questions);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getBunpouQuestions,
  getChoukaiQuestions,
  getDokkaiQuestions,
  getGoiQuestions,
};
