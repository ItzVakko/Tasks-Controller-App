const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
});

const List = mongoose.model("List", listSchema);

module.exports = List;
