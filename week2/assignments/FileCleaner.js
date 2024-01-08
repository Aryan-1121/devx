// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```




const fs= require("fs");

function removeSpace(){
    fs.readFile("file.txt","utf-8",function(err,data){
        console.log("original data : ");
        console.log(data);

        const newData = data.trim().split(" ").filter(function(i){
            if(i!='')
                return true;
            else 
                return false;
        }).join(" ");

        fs.writeFile("file.txt", newData, (err)=>{
            console.log("extra space removed ");
            fs.readFile("file.txt","utf-8",function(err,data){
                console.log(data);
            })

        });
    });
}


removeSpace();