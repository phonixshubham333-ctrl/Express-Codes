class ComplexNumber {
    real:number;
    imaginary:number;

    constructor(real:number , imaginary:number){
        this.real=real;
        this.imaginary=imaginary
    }

    display():void{
        console.log("Complex number is "+ this.real + "+i"+this.imaginary)
    }
}

const c1:ComplexNumber = new ComplexNumber(5,10);
c1.display();