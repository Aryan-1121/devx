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