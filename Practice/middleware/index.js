const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not enough age yet",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json("You are Ready to Enjpy the ride");
});

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
