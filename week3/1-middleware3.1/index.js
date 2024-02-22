

const express = require("express");

const app = express();

const port =3000;



//      WRONG WAY OF DUING THIS 



// app.get("/health-checkup", (req, res)=>{
//     const username = req.headers.username; 
//     const password = req.headers.password; 

//     const kidneyId = req.query.kidneyId;

//     if(!(username === "admin" && password === "pass")){
//         res.status(400).json({
//             "msg":"something wrong with your inputs"
//         });
//         return; 
//     }

//     if(kidneyId !=1 && kidneyId !=2){
//         res.status(400).json({
//             "msg":"something wrong with your kidney"
//         });
//         return; 
//     }

//      // put your kidney logic here 
//     res.json({
//         "msg":"your kidney is fine !!"   
//     })
// });




//      CORRECT WAY IS -> MIDDLEWARE        (much more cleaner way )

let requestHits = 1;

//  we can use middlewares to check how many hits we got on our server 
function countRequestHitsMiddleware(req, res, next){
    console.log(`no. of hits to server : ${requestHits++}`);
    next();                     // compalsary otherwise code will not reach to next function and will gets hung here 
    
}

 function authenticationMiddleware(req, res, next){
    const username = req.headers.username; 
    const password = req.headers.password; 

    if(!(username=="admin" && password== "pass")){
        res.status(400).json({
            "msg" : "user authentication failed "
        });
        return;
    }else{
        next();             //  to call next callback function 
    }
 }


function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId; 

    if(!(kidneyId == 1 || kidneyId ==2 )){
        res.status(400).json({
            "msg" : "wrong kidney i/p "
        });
        return;
    }else{
        next();
    }
}



// //      mainnn logic

// app.get("/health-checkup",countRequestHitsMiddleware, authenticationMiddleware, function(req, res){
//     //  do some logic here 
//     res.send("everything's fine !1");
// });

// app.get("/kidney-check",countRequestHitsMiddleware, authenticationMiddleware, kidneyMiddleware, (req, res)=>{
//     //  do some kidney logic here 

//     res.send("your kidney is fine !!1")
// });

// //      heart check doesn't have to do anything with kidney so we will not use  kidneyMiddleware here 

// app.get("/heart-check", countRequestHitsMiddleware, authenticationMiddleware, (req, res)=>{
//     res.send("your heart is healthy !1");
// });





//      mainnn logic


app.use(countRequestHitsMiddleware);


app.get("/health-checkup", authenticationMiddleware, function(req, res){
    //  do some logic here 
    res.send("everything's fine !1");
});

app.get("/kidney-check", authenticationMiddleware, kidneyMiddleware, (req, res)=>{
    //  do some kidney logic here 

    res.send("your kidney is fine !!1")
});

//      heart check doesn't have to do anything with kidney so we will not use  kidneyMiddleware here 

app.get("/heart-check", authenticationMiddleware, (req, res)=>{
    res.send("your heart is healthy !1");
});












app.listen(port, function(){
    console.log(`app listening on port ${port}`);
})


