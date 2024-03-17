
const express = require("express");

const app = express();
app.use(express.json())

app.post("/todo", (req, res)=>{

})

app.get("/todos", ()=>{

})


app.put("/complete", ()=>{
    
})










app.listen(3000,()=>{
    console.log("app listening at port 3000");
})



