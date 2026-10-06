const express = require("express");

const app = express();

function loggermiddleware(req, res, next) {
  console.log("Method url is" + req.url);
  console.log("Method is" + req.method);
}

app.use(loggermiddleware);

app.get("/call", (req, res) => {
  console.log("Hello I am Shubham Paul");
});

app.listen(3000, () => {
  console.log("The Server is listening on PORT 3000");
});
