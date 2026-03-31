const express = require("express");

const app = express();


function checkMyticket(req, res , next){
    let age =req.query.age;
    if(age>18){
        next();
    }
    else {
        res.json({
            msg:"Sorry you are not of age yet!!"
        })
    }
}

app.get('/ride', checkMyticket, function(req,res){
   res.send("You are set to the ride!!!")
})


app.listen(3000);