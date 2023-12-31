

//              until now we have only seen Synchronous functions





//      sync functn->       here all these lines will be executed by single thread in a synchronous manner (complete one then move to next)

// function findSum(n){
//     let ans=0;
//     for (let i = 1;i <=n; i++){
//         ans+=i; 
//     }
//     return ans; 
// }

// const ans = findSum(10);
// console.log(ans);

//      our thread can not do any other task while this funciton is being executed



//      ASYNC  ->


// JS provided us few Async functions   -> setTimout , fs.readFile, Fetch

// setTimout


// function findSum(n){ 
//     let ans =0;
//     for(let i=0; i<=n; i++){
//         ans+=i;
//     }
//     return ans ;
// }

// function findSumTill50(){
//     console.log(findSum(50));
// }

// setTimeout(findSumTill50, 2000);
// console.log("hey there");



// fs.readFile

// const fs = require("fs");           //  externel library -> fileSystem from nodeJs (helps us to read and write in/from file)

// fs.readFile("readableFile.txt", "utf-8", function(err, data){           //1-> file name  2->encoding    3-> anonymous function to get data (err, data)this is defined in such way so we have to write as it is
//     console.log(data);
// })

// console.log("hii there from main JS thread")        // this will execute 1st because fs.readFile is an Async function so that is bieng executed by web API and it will wait till our main thread is done doing its task.

// let a=0;
// for(let i=0; i<2000000000; i++){                // even though fs.readFile has already donee with its task still it will wait for main JS Thread to complete its task and then share the output of its own(fs.readFile)
//     a+=i;
// }
// console.log(a);     



// setTimeout(function(){
//     console.log("hii from inside anonymous + asyn function ")
// },5000);
    
// let a =0; 
// for(let i =0; i<3; i++){
//     a= a+ i;
// }
// console.log(a);
// console.log("Welcome :) ");




// if we have multiple Async functions running parallely then despite their order of writting the one which gets completed 1st will be on 1st priority of callback queue (its a queue which stores the async function result) which is later on picked by "event loop" into "call Stack"







setTimeout(function anon1(){
    console.log("hii from inside anonymous + asyn function ")
},10000);
    
    
    setTimeout(function anon2(){
    console.log("2nd -hii from inside anonymous + asyn function ")
},5000);
   
let a =0; 
for(let i =0; i<3; i++){
    a= a+ i;
}
console.log(a);
console.log("Welcome to loupe.");













