// // Array handbook

// // Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// // concat(), forEach(), map(), filter(), reduce(), find(), sort()



// // push()

// const initArray=[3,4,5,6];
// // if we want to put new element at the end -> push()
// initArray.push(77);
// console.log(initArray);



// //  pop()

// console.log("poping ");         //happens from last 
// initArray.pop();
// console.log(initArray);


// //  shift()

// // if we want to pop from front -> shift
// initArray.shift();              // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(initArray);


// //      unshift()

// //if we want to put element at the front -> unshift
// initArray.unshift(9);               //Elements to insert at the start of the array. Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(initArray);







// if we have 2 arryas and want to merge these 2 arrays  -> concat();

// concat()             -> similar to push, in push the 2nd element is  a no. and in concat the 2nd element is an array itself

// const -> can not be changed 
// var, let -> modifialble

// const arr1= [1,2,3,4];
// const arr2 =[7,8,9];
// // console.log(arr1.concat(arr2));

// const finalarr = arr1.concat(arr2);
// console.log(finalarr);





// now if we want to iterate over array -> foreach
//for()
//foreach()

// const arr= [4,5,7,8,4,2,67,0,9];

// for(let i =0; i<arr.length; i++){
//     console.log(arr[i])
// }







//          HOW CALL BACK WORKS   -> just pass a funciton as a paramenter 




function takeFunction(fn){           // fn here is taking a function as a parameter
    fn();
}



// function log1() {         
//     console.log("this is from log 1  funciton ")

// }

// function log2() {        
//     console.log("this is from log 2  funciton ")

// }


// takeFunction(log2);         // i never called log2 function i only passed log2 function as a argument




// const arr= [4,5,7,8,4,2,67,0,9];
// function logSometihng(str){
//     console.log(str);
// }
// // foreach expects a callpack as a parameter
// arr.forEach(logSometihng);          /// i passed another function as a paramter  (callback)

// // what for each says -> give me a function and i will run that function for each element of the arr (array)



























