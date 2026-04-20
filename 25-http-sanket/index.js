//http module help to build http 
const http = require("http");

//Setup a basic http Server 

const PORT = 3000;
 
const server = http.createServer(async(req,res)=>{     //Creating a Server Instance 
    console.log("Request Received!!")
    if(req.method == "GET"){
        res.writeHead(205)
        res.end("I am Receiving the GET Req")
    }
    else if(req.method =="POST"){
        res.end("I am Receiving the POST Request")
    }
    else{
        res.end("Receiving the Other Request")
    }
});
//Make the Server Listen on Port 3000
server.listen(PORT , ()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})