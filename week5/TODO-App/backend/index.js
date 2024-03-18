
const express = require("express");

const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
const app = express();


app.use(express.json())

app.post("/todo", async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "wrong inputs"
        });
    }

    // put in mongo db 
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })




})

app.get("/todos", async (req,res)=>{


    const todos = await todo.find({});          //need to await since its a db call
    res.json({
        todos
    })

})


app.put("/complete", async(req,res)=>{

    const updatePayload = req.body; 
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "wrong inputs"
        });
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true

    });
    res.json({
        msg: " Todo marked as done !!"
    })

})










app.listen(3000,()=>{
    console.log("app listening at port 3000");
})



