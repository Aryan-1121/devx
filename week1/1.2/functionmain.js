// //                          FUNCTIONS 



// function findSum(a,b){
//     // returning summation of 2 inputs
//     return a+b;
// }


// const value = findSum(4,5);
// console.log(value)


    //              CALLBACKS

// function sum(a, b){
//     let result = a+b; 
//     return result;
// }


// function displayResult(data){
//     console.log("Result of the sum is ="+ data);
// }

// function passiveResult(data){
//     console.log("Sum's result is ="+ data);
// }



// const ans = sum(1,4);
// displayResult(ans);


// we need to call only 1 function and print the reulst of the sum 


// function sum(a, b){
//     let result = a+b; 
//     return displayResult(result);
// }


// function displayResult(data){
//     console.log("Result of the sum is ="+ data);
// }

// function passiveResult(data){
//     console.log("Sum's result is ="+ data);
// }



// const ans = sum(1,94);

// but i now want to see result in passive format


// function sum(a, b){
//     let result = a+b; 
//     return passiveResult(result);
// }


// function displayResult(data){
//     console.log("Result of the sum is ="+ data);
// }

// function passiveResult(data){
//     console.log("Sum's result is ="+ data);
// }


// const ans = sum(15,94);



//  I don't want to make chcange in any function(bcs client will need any function according to his requirment ) all i am allowed to change is function call 

// thisis callback

// function sum(a, b, functionToCall){             // 3rd argument is a function itself
//     let result = a+b; 
//     functionToCall(result);
// }


// function displayResult(data){
//     console.log("Result of the sum is ="+ data);
// }

// function passiveResult(data){
//     console.log("Sum's result is ="+ data);
// }


// const ans = sum(15,4, displayResult);

// const ans2 = sum(15,4, passiveResult);













// setTimeout(,2*1000)         // setTimeout is a function provided by JS which takes few i/p, the second input is the time to wait before executing the 1st argument(function)





// setTimeout is also working on the concept of callback (since setTimeout is taking function as an argument)


// function greet(){
//     console.log("Hello all ");
// }

// setTimeout(greet, 4*1000);




// function greet(){
//     console.log("Hello all ");
// }
// // setInterval calls the function every few seconds(given time)
// setInterval(greet, 3*1000);





























































