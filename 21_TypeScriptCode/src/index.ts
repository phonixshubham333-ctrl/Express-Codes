let x:number =1;

console.log(x);

let shout:string ="Hello";

console.log(shout)


function sum(a:number , b:number) : number{
    return a+b
}

let ans = sum(1,2);

console.log(ans);

function delayedCall (anotherFn : ()=> void ){
    setTimeout(anotherFn,2000);
}

function log(){
    console.log("hi there!!!")
}

delayedCall(log);


function delaycall(anotherfn : ()=>void ){
    setTimeout(anotherfn,5000)
}

function log1():void{
    console.log("Hello My name is Shubham")
}

delaycall(log1);

let user :{
    firstname:string,
    age:number
} = {
    firstname:"harkirat",
    age:21
}

Interface ------->
const user ={
    firstname:"Shubham",
    lastname:"paul",
    age:25
}

interface User {
    firstname:string;
    lastname:string;
    age:number;
}

function islegal(user:User){
    if(user.age >18){
        return true
    }
    else{
        return false
    }
}

console.log(islegal(user));

//types ------>
type Alltype = number | string

function sum(a:Alltype , b:Alltype){
    return a+b   //Errror Gives natural 
}


