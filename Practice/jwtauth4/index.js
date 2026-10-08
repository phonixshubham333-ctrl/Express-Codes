const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
JWT_SECRET = "Spidy";
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Suppose we want to create a middleware to log the users
function userlogger(req, res, next) {
  console.log(users);
  next();
}

//Use a middleware to find if the user is already exists or not
// function finduserpresentmiddleware(req, res, next) {
//   const username = req.body.username;

//   //write the function to check the user is alredy prsent or not

//   function finduserbyusername(u) {
//     if(users.length ==null){
//         res.json({
//             message:"No user is there"
//         })
//     }

//     else if (u.username == username) {
//       return false;
//     } else {
//       next();
//     }
//   }

//   const findtheusername = users.find(finduserbyusername);

//   if (!findtheusername) {
//     res.json({
//       message: "User is already present in the Database!!",
//     });
//   }
// }

//Write a middleware for the Authentication and verify the token

function verifythetoken(req, res, next) {
  const token = req.headers.token;

  //Time to verify the token
  const verifytoken = jwt.verify(token, JWT_SECRET);

  if (verifytoken.username) {
    req.username = verifytoken.username;
    next();
  } else {
    res.json({
      message: "Verification failed!!",
    });
  }
}

//Declear array as a Inmeomory DB
let users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const passsword = req.body.password;

  users.push({
    username: username,
    password: passsword,
  });
  res.json({
    message: "Successfully Signup!!",
  });
});

app.post("/signin", userlogger, (req, res) => {
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
    //Generate the token
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET,
    );

    res.json({
      token: token,
      message: "Successfully Signin",
    });
  } else {
    res.json({
      message: "User Not Found",
    });
  }
});

app.get("/me", verifythetoken, (req, res) => {
  let findtheverifieduser = users.find(function (u) {
    if (u.username == req.username) {
      return true;
    } else {
      return false;
    }
  });

  if (findtheverifieduser) {
    res.json({
      username: findtheverifieduser.username,
      password: findtheverifieduser.password,
    });
  } else {
    res.json({
      message: "Not a Verified User!",
    });
  }
});

app.listen(3001, () => {
  console.log("SERVER is runnig on the PORT 3001");
});
