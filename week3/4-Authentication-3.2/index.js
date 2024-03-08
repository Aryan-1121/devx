const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());


const jwtPassword = "123$xyz";      // used to sign and verify jwt token


//  array of objects (in-memory DB)
const ALL_USERS = [
    {
        username: "superman@gmail.com",
        pw: "superr",
        name: "clark"
    },    
    {
        username: "joker@gmail.com",
        pw: "1212",
        name: "ledger"
    },    
    {
        username: "hero@gmail.com",
        pw: "abcdd",
        name: "herooo"
    }
];


 // return true if provided username & password is present in in-memory-db (ALL_USERS)
function userExists(username, password){
    let isPresent = false; 

    for(let  i = 0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].pw == password){
            isPresent = true;
            break; 
        }
    }
    return isPresent; 
}    


// to  get name from username + pw
function getName(username, pw){
    for(let i =0 ; i<ALL_USERS.length ; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].pw == pw){
            return ALL_USERS[i].name;
        }
    }
}

app.post("/signin",(req, res) =>{

    const username = req.body.username;
    const pw = req.body.password;
    if(!userExists(username, pw)){
//      if user doesn't exists -
        return res.status(403).json({
            msg: "user doesn't existi in our in memory db"
        });
    }
    // if user exists in our in memory db - then return a jwt 

    // getting name to get a signed token which have both username (from request body) and name (from getName())
    const name = getName(username, pw);

    var token = jwt.sign(
        {
            username: username,
            name : name
        }, jwtPassword);

    return res.json({
        token
    });
});



S






















