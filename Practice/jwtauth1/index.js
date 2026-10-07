const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
JWT_SECRET = "OPPSIDK";
let users = [];

app.use(express.json());

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.send("User Successfully Signup!!");
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  function finduser(u) {
    if (u.username == username && u.password == password) {
      return true;
    } else {
      return false;
    }
  }

  let findtheuser = users.find(finduser);

  if (findtheuser) {
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
    res.send("Invalid Token");
  }
});

app.get("/me", (req, res) => {
  const token = req.headers.token;

  const decodedtoken = jwt.verify(token, JWT_SECRET);

  const decodedusername = decodedtoken.username;

  let finduserbytoken = users.find(function (u) {
    if (u.username == decodedusername) {
      return true;
    } else {
      return false;
    }
  });

  if (finduserbytoken) {
    res.json({
      username: finduserbytoken.username,
      password: finduserbytoken.password,
    });
  } else {
    res.send("User can not find or Invalid User");
  }
});

app.listen(3000, () => {
  console.log("Server is Runnig on the PORT 3000");
});
