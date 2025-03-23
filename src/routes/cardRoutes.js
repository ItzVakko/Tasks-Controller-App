const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.post("/:listId", cardController.createCard);

module.exports = router;
