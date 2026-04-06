const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const JWT_SECRET ="paulshubham@2009"
const app = express();

const users=[];

app.use(cors());
app.use(express.json());

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.status(200).json({
        msg:" You are Signup!!"
    })
})

app.post("/signin", function(req,res){
    const username=req.body.username;
    const password = req.body.password; 

    //Find the user in the DB
    const findUser = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        }
        else{
            return false;
        }
    })

    if(findUser){
        // Encode the User data using JWT
        const token = jwt.sign({
            username:username
        },JWT_SECRET)

        res.json({
            token:token
        })
    }
    else{
        res.status(400).json({
          msg:  "Invalid Credentials!!"
        })
    }    
})

//Create a middleware that will Check is the USer real or not?

function auth ( req,res,next){
    const token = req.headers.token;

    // Decode the token
    const decodeJWT = jwt.verify(token,JWT_SECRET);
    if(decodeJWT.username){
        req.username = decodeJWT.username
        next();
    }
    else{
          res.status(401).json({
            msg:"Invalid token"
        })
    }
}

app.get("/me",auth, function(req,res){
    const findUser = users.find(function(u){
        if(u.username == req.username){
            return true
        }
        else{
            return false
        }
    })

    if(findUser){
        res.json({
            username:findUser.username,
            password:findUser.password
        })
    }
    else {
        res.status(400).json({
             msg:"User Can not find"
        })
    }
})

app.listen(3000);


