const express = require("express");
const app = express();

app.use(express.json(), (req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
});


app.get("/sum", (req, res)=>{
    const a = req.query.a; 
    const b = req.query.b; 
    console.log ("from backend  = "+ a, b);
    res.send((parseInt(a)+parseInt(b)).toString());
    // res.send(a+b);
});






app.listen(3000, ()=>{
    console.log("app listening to port 3000");
});





