const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.json({
        msg:"Hello I am listening from Port 3000"
    })
})

app.listen(3000);