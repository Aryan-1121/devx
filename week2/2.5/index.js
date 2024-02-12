const express = require("express");

const app = express();
const port = 3000;


function calcSum(n){
    let sum = 0 ; 
    n = parseInt(n);
    while(n>0){
        sum = sum + n%10; 
        n/=10;
    }
    return sum ;

}



app.get("/", function(req, res){
    res.send("hii ther er !!!1")
});


app.get("/sum",(req,res)=>{
    const sum = calcSum(req.query.num);
    res.send(`the sum of integers of given no. is -> ${sum}`);
});





app.listen(port, ()=>{
    console.log(`listening to port `, port);

})














