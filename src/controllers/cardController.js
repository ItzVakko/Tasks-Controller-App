const Card = require("../models/cardModel");
const List = require("../models/listModel");

exports.createCard = async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description, list: req.params.listId });
    await card.save();

    await List.findByIdAndUpdate(req.params.listId, {
      $push: { cards: card._id },
    });

    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find({ list: req.params.listId }).populate(
      "cards"
    );
    res.status(200).json(cards);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCard = async (req, res) => {
  try {
    const card = await Card.findOne();
    res.status(201).json(card).populate("cards");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
