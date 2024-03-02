
// connect with mongoDB 

// user can -
//     /signup - username, pass, firstName
//     /signin - username, pass 
//     /users - header (jwt in authorization header)


const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:devxat2024@cluster0.6grydmw.mongodb.net/userappnew");


//  defining the schema
const User = mongoose.model('Users',
{
    name: String,
    email: String,
    password: String
});


//      first create in-memory user and then save 
const user = new User(
    {
        name : "clarkk",
        "email":"superman@gmail.com",
        "password":"superr"
    }
);

user.save();






























