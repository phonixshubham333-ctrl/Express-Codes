const express = require("express");
const jwt = require("jsonwebtoken");
JWT_SECRET = "Shubham@2003";
const app = express();

var users = [];

//Middlewares --->

app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({
    message: "hi",
  });
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.send({
    message: "Successfully Signedup",
  });
});

app.post("/signin", (req, res) => {
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
    });
  } else {
    res.json({
      message: "validation failed",
    });
  }

  res.json({
    message: "Signin Succssfully",
  });
});

app.get("/user", (req,res)=>{
  const 
})

app.listen(3000);
