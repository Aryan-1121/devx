
const express = require("express");

const {createTodo, updateTodo} = require("./types")
const app = express();


app.use(express.json())

app.post("/todo", (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "wrong inputs"
        });
    }

    // put in mongo db 


})

app.get("/todos", (req,res)=>{

    const id = req.params.id;



})


app.put("/complete", ()=>{

    const updatePayload = req.body; 
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "wrong inputs"
        });
    }

})










app.listen(3000,()=>{
    console.log("app listening at port 3000");
})



