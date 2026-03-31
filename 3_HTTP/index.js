const express = require('express');

const app =express();

app.get('/get' , function(req,res){
    res.send("Hello I am there !!")
})

app.post('/post', function(req,res){

})

app.put('/put' , function(req,res){

} )

app.listen(3000);