const express= require("express");

const fs = require('fs');

const path = require('path');

const app = express();

app.get('/file', function(req,res){
    const filepath = path.join(__dirname,'a.txt');
    fs.readFile(filepath,'utf-8',function(err,data){
        if(err){
            res.send(`the error is ${err}`)
        }
        else {
            res.send(data)
        }
    })
})

app.listen(3000)