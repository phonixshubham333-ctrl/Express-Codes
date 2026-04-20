class ComplexNumber {
    real:number;
    imaginary:number;

    constructor(real:number , imaginary:number){
        this.real=real;
        this.imaginary=imaginary
    }

    display():void{
        console.log("Complex number is "+ this.real+"+"+this.imaginary+ "i")
    }

    add(C:ComplexNumber):void{
           this.real+=C.real
           this.imaginary+=C.imaginary
    }

    multiply(C:ComplexNumber):void{
        const r = this.real;
        const i = this.imaginary;
        this.real=(r*C.real - C.imaginary*i)
        this.imaginary=(r*C.imaginary + i*C.real)
    }
}

const c1:ComplexNumber = new ComplexNumber(5,10);
c1.add(new ComplexNumber(2,1));
c1.multiply(new ComplexNumber(3,4));
c1.display();