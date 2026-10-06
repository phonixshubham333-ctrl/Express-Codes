const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    add: a + b,
  });
});

app.listen(3001, () => {
  console.log("Server is listening on PORT 3001");
});
