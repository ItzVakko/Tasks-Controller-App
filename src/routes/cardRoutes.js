const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.post("/:listId", cardController.createCard);
router.get("/", cardController.getCards);
router.get("/:cardId", cardController.getCard);

module.exports = router;
