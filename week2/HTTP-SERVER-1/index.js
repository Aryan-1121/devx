const express = require("express");

const bodyParser = require("body-parser");
//  we can use body-parser, the body-parser module enables us to parse incoming request bvodies in a middleware. Express.js server needs to know what type of data you're sending over the nerwork, so it knows how to parse it (eg. app.use(bodyParser.json()); )

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



//      how to get body from post req. 



// const a = bodyParser.json();

app.use(bodyParser.json());

app.post("/body", function(req,res){
// console.log(req.body);          // there is no direct function to get body therfore we use body-parser (its also a library just like express is a library (install it in similar way -> npm install body-parser))
console.log(req.headers);



console.log("-----------BODY----------");

console.log(req.body);


// we need to do res.send or res.json or res.{something} otherwise our postman will keep waiting for some body 
res.send(req.body);

    // bodyParser.json();
})




app.post("/query-param",(req, res)=>{


    msg = req.query.message;
    // query is the provided function , "message" is the exact name from the query in the url 
    console.log(msg)

    res.send(req.query.message);
})


//  npm -> node package manager - used to fetch external library or something from internet to our local machine (download)
// what is npx  ->  we can use npx in place of npm (it will not download the library  or something to local machine - its just one time thing)  eg. npx nodemon















// if you want to see your app hosted on localhost on soome other device on same wifi network then just use ip:{port no.}       eg- . -> 196.168.5.7:3000





