const express = require("express");
const jwt =require("jsonwebtoken");
const app = express();
const JWT_SECRET ="paulshubham@2008";

const users =[];

app.use(express.json())

function logger (req,res,next){
    console.log(`${req.method} request call`)
    next();
}

app.use(logger);

app.post("/signup", function(req,res){
    const username=req.body.username;
    const password= req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.send({
        msg:"Successfully Signup!!!"
    })

})

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password=req.body.password;
    
   
    
    const findUser = users.find(function(u){
        if(u.username == username){
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
    
})

function auth(req,res,next){
    const token = req.headers.token
    const decodeJWT = jwt.verify(token,JWT_SECRET);
    
    if(decodeJWT.username){
        req.username = decodeJWT.username
        next();
    }
    else{
        res.json({
            msg:"You are logged in!!!"
        })
    }
}

app.get("/me", auth, function(req,res){
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
    else{
        res.status(400).send({
            msg:"Invalid Credentials!!"
        })
    }
})



app.listen(3000);