const express = require("express");

const app = express();

let users = [];

//use middleware

app.use(express.json());

function generatetoken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",

    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",

    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let token = "";

  for (let i = 0; i < 32; i++) {
    token = token + options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.send("You re successfully signedup!!!");
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
    const token = generatetoken();
    users.token = token;

    res.send({
      token: token,
    });
  } else {
    res.send("Invalid username and password");
  }
});

app.get("/me", (req, res) => {
  res.send(users);
});

app.listen(3000, () => {
  console.log("Authentication Server Successfully Start on PORT 3000");
});
