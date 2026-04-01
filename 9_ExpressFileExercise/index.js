const express =require("express");
const fs = require("fs")

const app =express();


app.get("/filename/:name", function(req, res){
    const filename = req.params.name;
     fs.readFile(filename,"utf-8",function(err,data){
       if(err){
        res.status(400).send(err.message)
       }
       res.send(data)
     })
})

app.listen(3000);