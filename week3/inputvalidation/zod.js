
const express = require("express");
const zod = require("zod");


const app = express();
app.use(express.json());


const schema = zod.array(zod.number());


app.post("/health-check", function(req, res){
    // we are expecting an array of numbers -> we will tell our zod schema this and it will maintain i/p validation for us
    const kidneys =req.body.kidneys;    
    const kLength = kidneys.length;
    const result = schema.safeParse(kidneys);
    if (!result.success){

        res.status(411).json({
            "msg":"failed in i/p validation ",
            result
        });
    }
    else{
        
        res.send(" no. of kidneys is/ are  = "+ kLength);
    }
})







app.listen(3000, ()=>{
    console.log(`app listening to port = 3000`);
})
























