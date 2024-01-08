

// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// const fs = require("fs");

// const dataToAdd = ".. written by warlord";
// function writeF(){
//     fs.writeFile("demo.txt",dataToAdd,function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File written/updated successfuly");
//             console.log(" new data -> ");
//             fs.readFile("demo.txt","utf-8",(err,data)=>{
//                 console.log(data);
//             });
//         }
//     });
// }

// writeF();



// the above code will rewrite the preexisting data, so if we want to keep both old and new data then first read from  file and store it in a variable then updata the variable (concat) then write back to file 



// const fs = require("fs");

// const dataToAdd = ".. written by warlord";
// function writeF(){
//     let modifiedData = "";
//     fs.readFile("demo.txt","utf-8",(err,data)=>{
//         console.log(data);
//         modifiedData = data.concat(dataToAdd); 

//                 // need to put fs.writeFile here -> otherwise both fs.readFile and fs.writeFile will be taken care by webAPIs and write file will end up doing its task first so we never get a chance to readFile and store the data in our varialble and modify it.  (doing it in below code )
//     });

//     fs.writeFile("demo.txt",modifiedData,function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File written/updated successfuly");
//             console.log(" new data -> ");
//             fs.readFile("demo.txt","utf-8",(err,data)=>{
//                 console.log(data);
//             });
//         }
//     });
// }

// writeF();





const fs = require("fs");

const dataToAdd = ".. written by warlord";
function writeF(){
    let modifiedData = "";
    fs.readFile("demo.txt","utf-8",(err,data)=>{
        console.log("original data -> ")
        console.log(data);
        modifiedData = data.concat(dataToAdd); 

        fs.writeFile("demo.txt",modifiedData,function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("File written/updated successfuly");
                console.log(" new data -> ");
                fs.readFile("demo.txt","utf-8",(err,data)=>{
                    console.log(data);
                });
            }
        });
               
    });

    
}

writeF();






