const express = require("express");
const router = express.Router();
const {
  getBunpouQuestions,
  getChoukaiQuestions,
  getDokkaiQuestions,
  getGoiQuestions,
} = require("../controllers/questionsController");

router.get("/bunpou", getBunpouQuestions);
router.get("/choukai", getChoukaiQuestions);
router.get("/dokkai", getDokkaiQuestions);
router.get("/goi", getGoiQuestions);

module.exports = router;
