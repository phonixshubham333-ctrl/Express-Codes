function linearSearch(array:number[] , x:number):any{
    for(let i=0;i<array.length;i++){
        if(array[i]==x){
            return array[i]
        }
    }
    return-1
}

const array :number[]=[1,5,8,2,12,7,65];
console.log(linearSearch(array,2));

// //in this linear Search we will return the index and the particular element in the array---->
type partOfNumber =[number, number]
function linearSearch(array:number[] , x:number):partOfNumber{
    for(let i=0;i<array.length;i++){
       if(array[i]==x){
        return [i,x];
       }
    }
    return [-1,-1]
}

const array:number[]=[4,56,78,9,10,2,-5];
console.log(linearSearch(array,56));
