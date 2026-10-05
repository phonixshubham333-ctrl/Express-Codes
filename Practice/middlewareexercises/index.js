const express = require("express");

const app = express();

let countrequest = 0;

function middlewareCountRequest(req, res, next) {
  countrequest++;
  next();
}

//To show the count Request using the Middleware

function middlewareshowtheRequestCount(req, res, next) {
  console.log(countrequest);
}

app.use(middlewareCountRequest);

app.get(
  "/user1",
  (req, res, next) => {
    res.status(200).json({
      name: "Shubham Paul",
    });
    next();
  },
  middlewareshowtheRequestCount,
);

app.get(
  "/user2",
  (req, res, next) => {
    res.status(200).json({
      name: "Mayank",
    });
    next();
  },
  middlewareshowtheRequestCount,
);

app.get(
  "/user3",
  (req, res, next) => {
    res.status(200).json({
      name: "Spidy",
    });
    next();
  },
  middlewareshowtheRequestCount,
);

console.log(countrequest);

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
