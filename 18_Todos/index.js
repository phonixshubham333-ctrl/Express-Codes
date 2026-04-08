const express = require("express");
const jwt= require("jsonwebtoken");
const cors = require("cors");
const JWT_SECRET = "shubham@2009";

const app = express();

let users=[]

//Middlewars------>
app.use(express.json());
app.use(cors());

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password,
        todos:[]
    })
    res.json({
        msg:"Succesfully Signup!!!"
    })
    console.log(users);
})

app.post("/signin" , function(req,res){
    const username=req.body.username;
    const password= req.body.password;
    
    const findUser = users.find(function(u){
        if(u.username== username && u.password == password){
            return true;
        }
        else{
            return false;
        }
    })

    if(findUser){
        //Encode with jwt --->
        const token = jwt.sign({
            username:username,
            password:password
        },JWT_SECRET)

        res.json({
            token:token
        })
    }
    else{
        res.status(400).json({
            msg:"Invalid User!!!"
        })
    }

})

//Middleware Auth  ----->
function auth(req,res,next){
    const token = req.headers.token;
    //Decode the jwt token ---->
    const decodetoken = jwt.verify(token , JWT_SECRET);

    if(decodetoken.username){
        req.username = decodetoken.username;
        req.password =decodetoken.password;
        next()
    }
    else{
        res.json({
            msg:"You are already login in the Device!!!"
        })
    }
}

app.post("/add", auth, function(req,res){
    const taskno = req.body.taskno;
    const taskdescription = req.body.taskdescription;

    const findUserForTodo = users.find(function(u){
        if(u.username == req.username && u.password ==req.password){
            return true;
        }
        else{
            return false;
        }
    })
    if(findUserForTodo){
       findUserForTodo.todos.push({
        taskno:taskno,
        taskdescription:taskdescription
       })
        res.json({
            msg:"Sucessfully Added!!"
        })
    }
    else{
        res.status(400).json({
            msg:"Failed to Add!!!!"
        })
    }
    console.log(users);
})

app.get("/me" ,auth, function(req,res){
    const findUserForUserDetails = users.find(function(u){
        if(u.username==req.username && u.password == req.password){
            return true
        }
        else{
            return false;
        }
    })

    if(findUserForUserDetails){
        res.json({
            username:findUserForUserDetails.username,
            password:findUserForUserDetails.password,
            todos:findUserForUserDetails.todos
        })
    }
    else{
        res.status(400).json({
            msg:"invalid User!!!"
        })
    }
})

//Delete the task from Todos

app.listen(3000);



// [
    
//   {
//     username: 'shubham',
//     password: '12345',
//     todos: [
//         {
//             taskno: '1', taskdescription: 'Study' 
//         },
    
//         {
//             taskno: '2', taskdescription: 'Run' 
//         }
//     ] 
//   },
// ]