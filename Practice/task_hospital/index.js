const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// app.get("/", (req, res) => {
//   res.send("Hi there!!");
// });

app.get("/", function (req, res) {
  const johnkidneys = users[0].kidneys;
  const numberofKidneys = johnkidneys.length;
  let numberofHealthyKidneys = 0;
  for (let i = 0; i < johnkidneys.length; i++) {
    if (johnkidneys[i].healthy) {
      numberofHealthyKidneys++;
    }
  }
  let noofunhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
  res.json({
    johnkidneys: johnkidneys,
    numberofKidneys: numberofKidneys,
    numberofHealthyKidneys: numberofHealthyKidneys,
    numberofUnhealthyKidneys: noofunhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.send("Done!!");
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].isHealthy == false) {
      users[0].kidneys[i].isHealthy = true;
    } else {
      res.sendStatus(401);
    }
  }
});

app.delete("/", function (req, res) {
  const newKidneys = [];

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      newKidneys.push({
        isHealthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.send("Done!!");
});

app.listen(3000, () => {
  console.log("Server is listening from the PORT 3000");
});
