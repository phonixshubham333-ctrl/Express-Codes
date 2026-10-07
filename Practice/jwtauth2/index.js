const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
JWT_SECRET = "HELLO";
let users = [];

app.use(express.json());

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.send("Succesfullt signup!");
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let finduser = users.find(function (u) {
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
    });
  } else {
    res.json({
      msg: "Invalid Token",
    });
  }
});

//Apply the Middleware

function verifyauthmiddleware(req, res, next) {
  const token = req.headers.token;

  const verifytoken = jwt.verify(token, JWT_SECRET);

  if (verifytoken.username) {
    req.username = verifytoken.username;
    next();
  } else {
    res.json({
      message: "You are not logged in!!",
    });
  }
}

app.get("/me", verifyauthmiddleware, (req, res) => {
  let finduserbyusername = users.find(function (u) {
    if (u.username == req.username) {
      return true;
    } else {
      return false;
    }
  });
  if (finduserbyusername) {
    res.json({
      username: finduserbyusername.username,
      password: finduserbyusername.password,
    });
  } else {
    res.json({
      message: "Invalid User",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
