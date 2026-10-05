const express= require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Shubham@2003";

const app= express();

let users =[];

app.use(express.json());


app.post("/signup", function(req,res){

    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username:username,
        password:password
    })


    res.json({
        msg:"You are Signed in!!"
    })
})

app.post("/signin" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    //Check is the data is already is in the database or not 
    const findUser = users.find(function(u){
        if(u.username== username && u.password ==password){
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
        res.json({
            msg:"Invalid Credentials of User!!!!"
        })
    }
})

//Make this Using Auth Function ---->

function Auth(req,res,next){
    const token = req.headers.token;
    
    const decodeToken = jwt.verify(token,JWT_SECRET);

    if(decodeToken){
        
    }
}

// app.get("/me", function(req,res){
//     const token = req.headers.token;

//     // Let the token Decode the JWT
//     const decodeToken = jwt.verify(token,JWT_SECRET);

//     //Let find the User ---->
//     const findUser = users.find(function(u){
//         if(decodeToken.username == u.username){
//             return true;
//         }
//         else{
//             return false
//         }
//     })

//     if(findUser){
//         res.json({
//             username:findUser.username,
//             password:findUser.password
//         })
//     }
//     else {
//         res.status(404).json({
//             msg:"User is not there in the Database!!"
//         })
//     }
// })

app.listen(3000);