//          PASSING FUNCTION AS A ARGUMENT 


// //  write a function to find square of a input 

// function findSquare(n){
//     let ans = n*n;
//     return ans;
// }

// // const sq = findSquare(5);
// // console.log(sq);


// //      now write a function to find sum of square of 2 inputs 



// function findSumOfSquares(a, b){
//     let square1 = findSquare(a);
//     let square2 = findSquare(b);

//     return square1 +square2;
    
// }



// const sq2 = findSumOfSquares(5, 3);
// console.log(sq2);




// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }



// // function SumOfSquares(a, b){
// //     let s1= square(a);
// //     let s2 = square(b);
// //     return s1+s2;
// // }


// // function SumOfCubes(a, b ){
// //     let c1= cube(a);
// //     let c2 = cube(b);
// //     return c1+c2;
// // }



// // const ans = SumOfCubes(2,3);
// // console.log(ans);

// //          again dry is being voilated 

// function sumOfAnyPower(a,b,callback){             // fn is taking funciton as an argument 
//     console.log(callback);

//     const value1 = callback(a);
//     const value2 = callback(b)
//     return value1+value2;
// }

// const ans1 = sumOfAnyPower(2,3,square);
// console.log(ans1);
// const ans2 = sumOfAnyPower(2,3,cube);
// console.log(ans2);





            //              ANONYMOUS FUNCTION -> DOESN'T HAVE NAME 


// when we are performing call back and passing name of function as a parameter -> what we can do instead is we can write the same function as an argument (we can remove the name of functino (recommended), because we can not use/call that function )



// function cube(n){
//     return n*n*n;
// }


function sumOfAnyPower(a,b,callback){             // fn is taking funciton as an argument 
    console.log(callback);

    const value1 = callback(a);
    const value2 = callback(b)
    return value1+value2;
}


// const ans = sumOfAnyPower(2,2,cube);
// console.log(ans);


// when we are performing call back and passing name of function as a parameter -> what we can do instead is we can write the same function as an argument (we can remove the name of functino (recommended), because we can not use/call that function )



// const ans = sumOfAnyPower(2,2,function cube(n){             // we can remove the name of function and make it anonymous fn
//     return n*n*n;
// })

const ans = sumOfAnyPower(2,2,function(n){             // 
    return n*n*n;
})





