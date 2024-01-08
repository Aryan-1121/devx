
// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 




let fs = require('fs');

function readF(){

    fs.readFile("demo.txt", "utf-8", function(err, data){                   // this is an async task
        console.log(data);
    });

    let d1 =new Date();
    let t1 = d1.getTime();
    let sum =0; 
    for(let i =1; i<2000000000; i++){
        sum+=i;
    }
    let d2 = new Date();
    let t2 = d2.getTime();
    console.log(sum);
    console.log(t2 -t1 + " milliseconds");
}

readF();