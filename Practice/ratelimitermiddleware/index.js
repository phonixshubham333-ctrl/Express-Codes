const express = require("express");

const app = express();

let countrequest1 = 0;
let countrequest2 = 0;
let countrequest3 = 0;

// 1. Rate limiter
function ratelimitermiddleware(req, res, next) {
  if (req.url === "/user1" && countrequest1 >= 5) {
    return res.status(403).json({
      err: "Too Many requests",
    });
  }

  if (req.url === "/user2" && countrequest2 >= 5) {
    return res.status(403).json({
      err: "Too Many requests",
    });
  }

  if (req.url === "/user3" && countrequest3 >= 5) {
    return res.status(403).json({
      err: "Too Many requests",
    });
  }

  next();
}

// 2. Count requests
function countrequestmiddleware(req, res, next) {
  if (req.url === "/user1") {
    countrequest1++;

    if (countrequest1 === 5) {
      setTimeout(() => {
        countrequest1 = 0;
        console.log("user1 can enter again");
      }, 60000);
    }
  } else if (req.url === "/user2") {
    countrequest2++;

    if (countrequest2 === 5) {
      setTimeout(() => {
        countrequest2 = 0;
        console.log("user2 can enter again");
      }, 60000);
    }
  } else if (req.url === "/user3") {
    countrequest3++;

    if (countrequest3 === 5) {
      setTimeout(() => {
        countrequest3 = 0;
        console.log("user3 can enter again");
      }, 60000);
    }
  }

  next();
}

// 3. Logger
function loggercountrequestmiddleware(req, res, next) {
  console.log("user1:", countrequest1);
  console.log("user2:", countrequest2);
  console.log("user3:", countrequest3);

  next();
}

app.get(
  "/user1",
  ratelimitermiddleware,
  countrequestmiddleware,
  loggercountrequestmiddleware,
  (req, res) => {
    res.json({
      name: "Shubham",
    });
  },
);

app.get(
  "/user2",
  ratelimitermiddleware,
  countrequestmiddleware,
  loggercountrequestmiddleware,
  (req, res) => {
    res.json({
      name: "Sharthak",
    });
  },
);

app.get(
  "/user3",
  ratelimitermiddleware,
  countrequestmiddleware,
  loggercountrequestmiddleware,
  (req, res) => {
    res.json({
      name: "Mayank",
    });
  },
);

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
