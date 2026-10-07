const expres = require("express");

const app = expres();

let users = [];

//Use middleware
app.use(expres.json());

function geneteratetoken() {
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

  res.send("Successfully signedup!!!");
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
    const token = geneteratetoken();

    users.token = token;

    res.json({
      message: token,
    });
  } else {
    res.send("invalid username and pasword");
  }
});

app.get("/me", (req, res) => {
  const token = req.header.token;

  let finduserbytoken = users.find(function (u) {
    if (u.token == token) {
      return u;
    } else {
      res.send("Invalid Token");
    }
  });

  res.json({
    username: finduserbytoken.username,
    password: finduserbytoken.password,
  });
});

app.listen(3000, () => {
  console.log("SERVER is Running on PORT 3000");
});
