const express = require("express");
const jwt = require("jsonwebtoken");
JWT_SECRET="Shubham@2003";

const app= express();

app.use(express.json());

let users =[];

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    console.log(users);

    res.json({
        msg:"You are signed up!!!!"
    })


})


app.post("/signin", function(req,res){
     //First i have to do the encryption

     const username= req.body.username;
     const password = req.body.password;

     const findUser = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        }
        else{
            return false;
        }
     })

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
            msg:"Invalid Credentials Please give the right one!!"
        })
     }

    console.log(users);
})

// Auth me as a user 
app.get("/me", function(req,res){

    const token = req.headers.token;
     // decrypt the JWT token 
     const decodeJWT = jwt.verify(token,JWT_SECRET);

     let findUSer= null;
     
     for(let i=0; i<users.length;i++){
        if(users[i].username == decodeJWT.username){
            findUSer=users[i]
        }
     }

    if(findUSer){
         res.json({
        msg:"Hello User",
        username:findUSer.username,
        password:findUSer.password
     })
    }
    else{
        res.status(400).json({
            msg:"Tum toh chutiye ho yarr!!"
        })
    }
})


app.listen(3000);