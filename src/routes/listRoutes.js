const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

router.post("/:boardId", listController.createList);
router.get("/", listController.getLists);
router.get("/:listId", listController.getList);

module.exports = router;
