const express = require("express");

const app = express();

app.use(express.json());

let todos = [];

app.post("/addtodos", (req, res) => {
  const task = req.body;
  todos.push({
    id: task.id,
    task_description: task.task_description,
  });
  res.send("Done!!");
});

app.get("/gettodo", (req, res) => {
  res.send(todos);
});

app.listen(3000, () => {
  console.log("Hello I am listening from the PORT 3000");
});
