const Board = require("../models/boardModel");

exports.createBoard = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Board name is required" });
    }

    const board = new Board({ name });
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find().populate("lists");
    res.status(201).json(boards);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBoard = async (req, res) => {
  try {
    const board = await Board.findOne().populate("lists");
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
