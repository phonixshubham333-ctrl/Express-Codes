// class Person{
//     name;
//     age;
//     address;
//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address
//     }

//     display(){
//         console.log('The Description of the Person is '+ this.name , this.age , this.address)
//     }
// }

// const p1 = new Person("Shubham" , 25 , "Kolkata");

// p1.display();


//Linear Search 

function linearSearch(array , x){
    for(let i=0;i<array.length ; i++){
        if(array[i]==x){
            return i
        }
    }
    return -1
}

const array = [4,5,8,9,10];

console.log(linearSearch(array,5));