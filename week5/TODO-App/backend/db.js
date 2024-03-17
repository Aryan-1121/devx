const mongoose = require("mongoose");
const { string } = require("zod");

// Todo{
//     title: string ,
//     description: string ,
//     completed: boolean
// }


mongoose.connect("mongodb+srv://admin:devxat2024@cluster0.6grydmw.mongodb.net/todos");

const TodoShcema = mongoose.model('todo', 
{
    title: string, 
    description: string,
    completed: boolean
});



module.exports ={
    todo : TodoShcema
}