const express = require("express");

const app = express();

app.use(express.json());

app.post("/add", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    add: a + b,
  });
});

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
