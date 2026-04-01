const express = require("express");


const app = express();

let totalrequest = 0;

function CountRequest ( req, res, next){
    totalrequest++;
    next();
}



app.get("/count" , function(req, res){
    res.send(`My total Request is ${totalrequest}`)
})

app.use(CountRequest)

app.get("/sum/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b= parseInt(req.params.b);

    res.json({
        answer:a+b
    })
})

app.get("/multiplication/:a/:b" , function(req, res){
    const a=parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer:a*b
    })
})

app.listen(3000);