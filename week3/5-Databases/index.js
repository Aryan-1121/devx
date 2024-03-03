
// connect with mongoDB 

// user can -
//     /signup - username, pass, firstName
//     /signin - username, pass 
//     /users - header (jwt in authorization header)


const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

const jwtPassword = "abc$990";

mongoose.connect("mongodb+srv://admin:devxat2024@cluster0.6grydmw.mongodb.net/userappnew");


//  STEP 1- defining the schema
const User = mongoose.model('Users',
{
    name: String,
    email: String,
    password: String
});



app.post("/signup", async function(req, res){

    const name = req.body.name; 
    const username = req.body.email; 
    const pass = req.body.password;

    // check if user is already existing in db or not 

    const isExisting = await User.findOne(
        {
            email : username
        }
    );

    if(!isExisting){
        //      first create in-memory user and then save 

        const user = new User(
        {
            name : name,
            "email":username,
            "password":pass
        });
            
        user.save();
        res.json({
            msg:"User created successfully"
        });

    }

// else if user already esists in db ->
res.status(400).send({
    msg:"user with this email already exists, try another one !! "
});

});



app.listen(3000, ()=>{
    console.log("app listening at port 3000");
});























