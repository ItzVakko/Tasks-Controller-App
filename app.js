const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const boardRoutes = require("./src/routes/boardRoutes");
const listRoutes = require("./src/routes/listRoutes");
const cardRoutes = require("./src/routes/cardRoutes");

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use("/api/v1/boards", boardRoutes);
app.use("/api/v1/lists", listRoutes);
app.use("/api/v1/cards", cardRoutes);

mongoose
  .connect("mongodb://localhost:27017/tasks-controller", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose connected successfully!"))
  .catch((err) => console.log("Could not connect mongoose: ", err));

app.listen(3000, () => {
  console.log("App started!");
});
