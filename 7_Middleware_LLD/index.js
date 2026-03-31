const express = require("express");
const axios = require("axios");


const app = express();


async function getData (){
    const resposne = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    return resposne.data
}

app.get("/" , async function(req, res){
     const data = await getData();
     res.json(data);
})

app.listen(3000);