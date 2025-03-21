const List = require("../models/listModel");

exports.createList = async (req, res) => {
  try {
    const { name } = req.body;
    const list = new List({ name, board: req.params.boardId });
    await list.save();

    await Board.findByIdAndUpdate(req.params.boardId, {
      $push: { lists: list._id },
    });

    res.status(201).json(list);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getLists = async (req, res) => {
  try {
    const lists = await List.find({ board: req.params.boardId }).populate(
      "cards"
    );
    res.status(200).json(lists);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
