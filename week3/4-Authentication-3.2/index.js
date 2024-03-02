const express = require("express");
const jwt = require("jsonwebtoken");


const jwtPassword = "123$xyz";

const app = express();

app.use(express.json());

//  array of objects 
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


function userExists(username, password){
    // return true if provided username & password is present in in-memory-db (ALL_USERS)
    let isPresent = false; 

    for(let  i = 0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].pw == password){
            isPresent = true;
            break; 
        }
    }

    return isPresent; 


}    

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

        return res.status(403).json({
            msg: "user doesn't existi in our in memory db"
        });
    }
    // if user exists in our in memory db - then return a jwt 
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


//  get all users except the given one 
app.get("/users", function(req, res){
    //  expects token in header 
    const token = req.headers.authorization;

    try{
        const decoded = jwt.verify(token, jwtPassword);
        const usernmae = decoded.username;
        res.json({
            user : ALL_USERS.filter((value)=>{
                if(value.username == usernmae)
                    return false ;
                return true;
            })
        });
    }
    catch(err){
        return res.status(403).json({
            msg : " invalid tokenn !1"
        });
    }
});

app.listen(3000,()=>{
    console.log(`App is listening to port 3000`);
})























