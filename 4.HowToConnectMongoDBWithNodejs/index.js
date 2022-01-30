// importing libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 4000;

// middlewares
app.use(cors());
app.use(express.json());

// localhost url + db name (connectwithdb)
mongoose.connect("mongodb://localhost:27017/connectwithdb");

// Model
const TodoDB = mongoose.model("Todo", { task: String });

// endpoints
app.get("/", (_req, res) => {
  // Get all the data and send as response
  TodoDB.find().then((data) => res.json(data));
});

app.post("/", (req, res) => {
  // Get the data from postman
  const { task } = req.body;

  // create the data for saving in db
  const singleTodo = new TodoDB({ task: task });

  // save the data in db and send response
  singleTodo.save().then(() => res.json("New task added"));
});

// starting server in port (4000)
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
