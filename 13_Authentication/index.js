const express = require("express");

const app= express();

app.get("/", function(req, res){
    res.send("Hello I am listening form Port 3000");

})

app.listen(3000);