const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

JWT_SECRET = "SPIDY";

const app = express();

//use middleware
app.use(express.json());
app.use(cors());

function loggermiddleware(req, res, next) {
  console.log(users);
  next();
}

function authenticationmiddleware(req, res, next) {
  const token = req.headers.token;

  const verifyedtoken = jwt.verify(token, JWT_SECRET);

  if (verifyedtoken.username) {
    req.username = verifyedtoken.username;
    next();
  } else {
    res.json({
      message: "You are logged out!!",
    });
  }
}

let users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are successfully signup!!",
  });
});

app.post("/signin", loggermiddleware, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const finduser = users.find(function (u) {
    if (u.username == username && u.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (finduser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET,
    );

    res.json({
      token: token,
      message: "Successfully signedin!!",
    });
  } else {
    res.json({
      message: "Invalid Token",
    });
  }
});

app.get("/me", authenticationmiddleware, (req, res) => {
  let finduserByusername = users.find(function (u) {
    if (u.username == req.username) {
      return true;
    } else {
      return false;
    }
  });

  if (finduserByusername) {
    res.json({
      username: finduserByusername.username,
      password: finduserByusername.password,
    });
  } else {
    res.json({
      message: "User Not Find",
    });
  }
});

app.listen(3001, () => {
  console.log("SERVER is runnig on PORT 3001");
});
