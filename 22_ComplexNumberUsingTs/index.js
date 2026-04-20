"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComplexNumber {
    real;
    imaginary;
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    display() {
        console.log("Complex number is " + this.real + "+" + this.imaginary + "i");
    }
    add(C) {
        this.real += C.real;
        this.imaginary += C.imaginary;
    }
    multiply(C) {
        const r = this.real;
        const i = this.imaginary;
        this.real = (r * C.real - C.imaginary * i);
        this.imaginary = (r * C.imaginary + i * C.real);
    }
}
const c1 = new ComplexNumber(5, 10);
c1.add(new ComplexNumber(2, 1));
c1.multiply(new ComplexNumber(3, 4));
c1.display();
//# sourceMappingURL=index.js.map