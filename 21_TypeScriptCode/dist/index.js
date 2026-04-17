"use strict";
// let x:number =1;
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(x);
// let shout:string ="Hello";
// console.log(shout)
// function sum(a:number , b:number) : number{
//     return a+b
// }
// let ans = sum(1,2);
// console.log(ans);
// function delayedCall (anotherFn : ()=> void ){
//     setTimeout(anotherFn,2000);
// }
// function log(){
//     console.log("hi there!!!")
// }
// delayedCall(log);
// function delaycall(anotherfn : ()=>void ){
//     setTimeout(anotherfn,5000)
// }
// function log1():void{
//     console.log("Hello My name is Shubham")
// }
// delaycall(log1);
// let user :{
//     firstname:string,
//     age:number
// } = {
//     firstname:"harkirat",
//     age:21
// }
//Interface ------->
const user = {
    firstname: "Shubham",
    lastname: "paul",
    age: 25
};
function islegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(islegal(user));
//# sourceMappingURL=index.js.map