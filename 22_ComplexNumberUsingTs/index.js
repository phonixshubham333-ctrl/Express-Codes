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
        console.log("Complex number is " + this.real + "+i" + this.imaginary);
    }
}
const c1 = new ComplexNumber(5, 10);
c1.display();
//# sourceMappingURL=index.js.map