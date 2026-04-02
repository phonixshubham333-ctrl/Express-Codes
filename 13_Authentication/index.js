const express = require("express");

const app= express();

const users =[];

function generateToken(){
    let option = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'1','2','3','4','5','6','7','8','9'];

   let token ="";

   for(let i=0;i<option.length;i++){
      token = token + option[Math.floor(Math.random()*option.length)];
   }

   return token;
}

app.use(express.json());

app.post("/signup" ,function(req,res){
    const username =req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    console.log(users);
    
    res.send({
        msg:"you are signedup!!!"
    })
})

app.post("/signin" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u){
        if(u.username==username && u.password == password){
            return true;
        }
        else{
            return false
        }
    })

    if(user){
        const token = generateToken();
       user.token=token
        res.json({
        msg:token
    })
    }
    else{
        res.status(400).send({
            msg:"Invalid Credentials"
        })
    }

    console.log(users);
    
})

app.get("/me", function(req,res){
    const token=req.headers.token;
    const foundUser = users.find(function(u){
        if(u.token==token){
            return true
        }
        else{
            return false
        }
    })
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }
    else{
        res.json({
            msg:"Invalid Token!!!"
        })
    }
})

app.listen(3000);