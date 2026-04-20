class Person{
    name;
    age;
    address;
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address
    }

    display(){
        console.log('The Description of the Person is '+ this.name , this.age , this.address)
    }
}

const p1 = new Person("Shubham" , 25 , "Kolkata");

p1.display();