const express = require("express");
const router = express.Router();
const boardController = require("../controllers/boardController");

router.post("/", boardController.createBoard);
router.get("/", boardController.getBoards);

module.exports = router;
