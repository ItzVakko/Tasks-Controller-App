const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

router.post("/:boardId/lists", listController.createList);

module.exports = router;
