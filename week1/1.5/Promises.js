

// // Promise is just a syntactical sugar coating  to make it more redable, under the hood still works same as earlier.

// //  how to make our own Async fn    ->  its just a wrapper on top of another async function.



// //  one reason to introduce Promise was to get rid of callbacks (since its kind of ugly way to write asyn code (sometimes thers a callback hell ))




// const fs = require('fs')

// // our own async function 

// function readFile(){
//     console.log("inside readFile method ");
//     return new Promise(function(resolve){
//         console.log("inside promise's function ");

//         fs.readFile("readableFile.txt", "utf-8", function(err, data){
//             console.log("before resolve call ");

//             resolve(data);
//         });
//     })
// }

// //      whatever you pass in resolve(resolve is Promise's function argument (just an identifier-> we could have given any other name) ) reaches to onDone(is actually the function which was supposed to be put as a callback function in argument ) / onDone is the method which is called by "then"  ***


// function onDone(data){
//     console.log(data);
// }

// // readFile();
// // console.log(readFile());

// // readFile().then(onDone);

// var a = readFile();

// a.then(onDone);
// console.log(a);








// jsut a class similar to any oother class ...eg. Date 

// var d = new Date();

// console.log(d.getDate);
// console.log(d.getDate());




// var p = new Promise();      // here's a catch Promise() needs 1 argument as a function  and that function needs to have 1st argument as resolve(any identefier will work in place of resolve )*****

// promise can be in 3 states -> pending /  resolved    /   rejected
// var p = new Promise(function(resolve){

// });

// function cBack(){
//     console.log(p);
// }

// //                  Promise { <pending> }       ->       resolve have not been called yet method has not been executed yet


// p.then(cBack);
// // console.log(p);

// // 





// var p = new Promise(function(resolve){
//     resolve("a for apple ");                     
// });

// function cBack(){                    // main async logic is put up here 
//     console.log(p);
// }

// //                  Promise { <pending> }       ->       resolve have not been called yet method has not been executed yet


// p.then(cBack);
// // console.log(p);







var p = new Promise(function(resolve){
    //  adding a setTimeout so that we can see how promise's state changes from pending to resolve 
    setTimeout(function(){
        resolve("a for apple ");

    }, 1000);
});

function cBack(){
    console.log(p);
}

//                  Promise { <pending> }       ->       resolve have not been called yet method has not been executed yet


console.log(p);         // this will print pending since cBack funciton has not been called yet (resolve function is not yet worked yet )
p.then(cBack);
























