//generics----> <T>
// function linearSearch <T>(array:T[] , x:T):[number ,T |undefined]{
//     for(let i=0;i<array.length;i++){
//         if(array[i]==x){
//             return[i,array[i]];
//         }
//     }
//     return[-1,x]
// }

// const array:number[] =[2,4,7,8,56,-2,65,745,-1,68];
// console.log(linearSearch<number>(array,8));

// const array1:string[]=["jwd","Shubham", "jshdwd","hello","i"];
// console.log(linearSearch<string>(array1,"Shubham"));

//Generics in Stack --->

// class Stack<T>{
//     private array : T[];

//     constructor(){
//         this.array=[]
//     }

//     push(x:T):void{
//         this.array.push(x)
//     }

//     pop():void {
//         this.array.pop();
//     }

//     top():T{
//         return this.array[this.array.length-1]!
//     }

//     display():void {
//         console.log(this.array)
//     }
// }

// const st = new Stack<string>();
// st.push("Shubham");
// st.push("i");
// st.push("g");
// st.push("Hello");
// st.display();
// st.pop();
// st.display();

//generics in interface ---->
interface custominterface <T1,T2> {
    property:T1;
    moreproperty:T2;
}

const obj:custominterface<number,string>={
     property:22,
     moreproperty:"Shubham"
}

console.log(obj.moreproperty);

//Usin Only Interfcace ---->

interface customerDetails {
    property:number,
    propertydetails:string
}

const customer:customerDetails ={
    property:45,
    propertydetails:"BHK Kolkata 1 "
}

console.log(customer.property);