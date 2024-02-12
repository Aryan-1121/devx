//  given an array - multiply each element by 2 and return it 

const e = require("express");

const arr = [1,2,6,7,88];


// const newArr=[];


// for(let i = 0 ; i<arr.length; i++){
//     newArr[i] = arr[i]*2;
// }

// console.log(newArr);



function transform(n){
    return n*2; 
}


// transform(4);
// console.log(transform(4));




const ans = arr.map(transform);

console.log(ans)



//          FILTER 

//  filter out even no.s from array

// function isEven(n){
//     return n%2==0 ?true:false;
// }

// const ansArr = arr.filter(isEven);



// const ansArr = arr.filter(function (n){
//         return n%2==0 ?true:false;
//     });

// console.log("even from array -", ansArr);



const ansArr = arr.filter((n)=>{
    return n%2==0 ?true:false;
});

console.log("even from array -", ansArr);












