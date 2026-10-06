const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/add", (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ error: "Both inputs must be valid numbers." });
  }

  res.json({
    add: a + b,
  });
});

app.listen(3001, () => {
  console.log("Server is running on PORT 3001");
});
