

//      trying to create a callback helll -> callback lead to unnecessary indentation this is called callback hell
// callback inside callback insdie callback....

//  write a function to write something after 1 sec and then wait 3 sec to log another thing 

// function logSomething(){
//     setTimeout(function(){
//         console.log("this is 1st function insided logSOmeting");

//         setTimeout(function(){
//             console.log("2nd function from insdie of another async function");
//         },3000);
//     }, 1000);
// }

// logSomething();





// //                     intro to  PROMISES

// function myOwnSetTimeout(fn, duration){
//     setTimeout(fn, duration);
// }

// //calling 
// myOwnSetTimeout(function(){
//     console.log("heey there !!");
// }, 2000);



//      now writing same thing using promises 
//      Promise is just another class provided by node 
// 

function myOwnSetTimeout(duration){                         // we don't accept the callback 
    //  this function returns a promise 
    return new Promise(function(resolve){                       // Promise expects a argument which is a callback function
        setTimeout(resolve, duration);
    });
}

myOwnSetTimeout(2000).then(function(){
    console.log("hii there ");
});




























