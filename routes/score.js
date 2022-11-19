const express = require("express");
const scoreController = require("../controllers/score.controller");

const router = express.Router();

router.post("/", scoreController.save);

module.exports = router;
