const express = require('express');
const jwt = require("jsonwebtoken");
const cors = require("cors");
const JWT_SECRET = "paulshubham@2003"

const app = express();

app.use(express.json());
app.use(cors());

let users =[];

//Signup Endpoint ----->
app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        msg:"Ypu are Login Successfully"
    })
})

//Signin Endpoint ---->
app.post("/signin" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const findUser = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        }
        else {
            return false
        }
    })
    
    //Encode the data using jsonwebtoken ----->
    if(findUser){
       const token = jwt.sign({
        username:username
       },JWT_SECRET)

       res.json({
        token:token
       })
    }
    else{
        res.status(400).send({
            msg:"Invalid Credentials!!!"
        })
    }
})

//Make a Auth Function for Verification ----->
function auth(req,res,next){
     const token = req.headers.token;
     
     //Decode the JWT token ---->
     const decodetoken = jwt.verify(token,JWT_SECRET)

     if(decodetoken.username){
        req.username = decodetoken.username
        next()
     }
     else{
        res.status(400).json({
            msg:"You are already login!!"
        })
     }
}

//Write a /me Endpont to get the USer Details ---->

app.get("/me",auth,function(req,res){
    const finduser = users.find(function(u){
        if(u.username==req.username){
            return true;
        }
        else{
            return false;
        }
    })
    if(finduser){
        res.json({
            username:finduser.username,
            password:finduser.password
        })
    }
    else{
        res.status(400).json({
            msg:"User Can not found"
        })
    }
})
//Start the Server at Port 3000 ----->
app.listen(3000); 