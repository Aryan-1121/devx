const express = require("express");

const port =3000;


const app = express();



app.get("/", function(req, res){
    console.log("request has been reached");
    res.send("HELLO WORLD !!!");
});


app.get("/route-handler", (req, res)=>{
    //  req -> headers, body, query parameter

    //res- > res.send , res.json 

    res.json({
        "name":"hero",
        "age":99999
    })
});


app.post("/conversation",(req, res)=>{
    res.send("<b> Heyy there how are you 1!1");
})


app.listen(port, ()=>{
    console.log("listeneing to port - "+ port);
});




//      lets try recieving some headers from postman 


//      there are maybe some headres already in postman , add our new one 
//      for eg. Authorization = 1234567 (header will get automatically parsed into smaller case )


app.post("/check", (req, res)=>{
    // console.log(req.headers.authorization);
    console.log(req.headers);

    // res will go to o/p box of the postman 
    res.send({
        "msg": "2 + 3 = 5"
        // o/p -
        
        // {
        //     authorization: '1234567',
        //     'user-agent': 'PostmanRuntime/7.36.0',
        //     accept: '*/*',
        //     'postman-token': '5736e8b0-b8fb-4c8b-9990-32aa2f065bf7',
        //     host: 'localhost:3000',
        //     'accept-encoding': 'gzip, deflate, br',
        //     connection: 'keep-alive',
        //     'content-length': '0'
        //   }
    });
})



