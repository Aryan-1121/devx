

// //  Again , just syntactical sugar, under the hood still uses same callback/Promises


// //      TRADITIONAL ASYNC FUNCITON USING PROMISES ->

// function nonAsyncFunction (){
//     return new Promise(function(resolve){
//         resolve("hii there this is resolve from promise");
//     });
     
// }


// function main(){
//     nonAsyncFunction().then(function(value){
//         console.log(value);
//     });
// }


// main();





// //          ASYNC FUNCTION USING ASYNCAWAIT


// function firstAsyncAwait(){

//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("hii there this is resolve from promise");

//         },2000);
//     });
// }

// async function main(){                              // making this function async function using async keyword
//     // firstAsyncAwait().then(function(value){
//     //     console.log(value);
//     // });


//     // let value = firstAsyncAwait();
//     // console.log(value);               //  Promise { <pending> }


//     // with the help of await keyword we can avoid .then ->

//     let value = await firstAsyncAwait();                // it will directly call resolve without .then 
//     console.log(value);
// }


// //      we just changed 2 things changed ->
// // asycn keyword in front of functin 
// // await keyword where we are calling the function 


// //  await -> needs to be always wrapped into a async function 

// main();









function firstAsyncAwait(){

    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hii there this is resolve from promise");

        },2000);
    });
}

async function main(){                             
       console.log("from async functoin above await")

    let value = await firstAsyncAwait();            
    //      anything we put below await statement will be considered in async thing (inside .then wala method)     
    console.log(value);
    console.log("from async functoin below await")
}

main();

console.log("see main thread is working here while webApi is busy performing async task ");




















