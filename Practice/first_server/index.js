const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send(`<b>Hi there </b> 
    <br>
    <b>Hi there </b>
    `);
});

app.listen(3000, () => {
  console.log("I am listening from the PORT 3000");
});
