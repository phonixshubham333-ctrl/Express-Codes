"use strict";
// function linearSearch(array:number[] , x:number):any{
//     for(let i=0;i<array.length;i++){
//         if(array[i]==x){
//             return array[i]
//         }
//     }
//     return-1
// }
Object.defineProperty(exports, "__esModule", { value: true });
function linearSearch(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) {
            return [i, x];
        }
    }
    return [-1, -1];
}
const array = [4, 56, 78, 9, 10, 2, -5];
console.log(linearSearch(array, 56));
//# sourceMappingURL=index.js.map