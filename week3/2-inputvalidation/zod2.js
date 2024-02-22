const express = require("express");
const z = require("zod");


const app = express();

app.use(express.json());

const schema = z.object({
    email : z.string().email(),
    password : z.string().min(8),
    country : z.literal("IN").or(z.literal("US"))
});


app.post("/person", (req, res)=>{
    const person = req.body.person;

    const result = schema.safeParse(person);
    
    if(!result.success){
        res.status(411).json({
            "msg":"input validation failed ",
            result
        });
    }else {
        res.send(person);
    }
    
})

app.listen(3000,()=>{
    console.log("app listening at port 3000");
});



























