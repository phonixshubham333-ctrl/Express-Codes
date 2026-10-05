const express = require("express");

const app = express();

let countrequest = 0;

function basicRateLimiterMiddleware(req, res, next) {
  if (countrequest < 5) {
    next();
  } else {
    res.status(403).json({
      msg: "Too Many request",
    });
  }
}

function middlewareCountRequest(req, res, next) {
  countrequest++;
  if (countrequest == 5) {
    setTimeout(() => {
      countrequest = 0;
      console.log("Countrequest sets to 0 again");
    }, 60000);
  }

  next();
}

//To show the count Request using the Middleware

function middlewareshowtheRequestCount(req, res, next) {
  console.log(countrequest);
}

// app.use(middlewareCountRequest);

app.get(
  "/user1",
  basicRateLimiterMiddleware,
  middlewareCountRequest,
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
  basicRateLimiterMiddleware,
  middlewareCountRequest,
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
  basicRateLimiterMiddleware,
  middlewareCountRequest,
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
