const express = require("express");


const app = express();

let requestCount =0;

function CountRequest (req, res ,next){
    requestCount++;
    next();
}

app.use(CountRequest);


app.get("/hello" , function(req, res){
    res.send("Hello I am listening")
})

app.get('/requestCount' , function(req,res){
    res.json({
        myCountRequest: {requestCount},
        msg:"I am Done From get endpoint"
    })
})

app.post("/user" , function(req, res){
    res.json({
        msg:"I a Done Form Post Endpoint!!"
    })
})

app.put("/update", function(req, res){
    res.json({
        msg:" I am Done from Put Endpoint"
    })
})

app.listen(3000);