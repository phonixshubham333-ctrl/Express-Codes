"use strict";
// let x:number =1;
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Shubham ",
    age: 25,
    address: {
        city: "Kotulpur",
        country: "India",
        pincode: 564751
    }
};
function isMyUserProper(user) {
    if (user.name.trim() == "Shubham" && user.age == 25) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isMyUserProper(user));
//# sourceMappingURL=index.js.map