const express = require("express")

const app = express();

app.use(express.json());            // express.json() is a middleware



app.post("/health-check",(req, res)=>{

    // kidneys = [1,2]          we are expecting array

    const kidneys = req.body.kidneys;
    console.log(typeof(kidneys));
    console.log(kidneys);
    const kLength = kidneys.length;
    console.log(kLength);

    res.send(`no. of kidneys = ${kLength}`);
});


app.listen(3000,()=>{
    console.log(` app listening on 3000`);
});

//  GLOBAL CATCH -

// error handling middlewares - this is a special type of MW fn in express that has 4 instead of 3 args (`(err, req, res, next)`) . EXPRESS recognises error-handling middlewares bcs of these 4 args

app.use(function(err, req, res, next){
    res.json({
        "msg":"something wrong happened (check your i/p once"
    });
});











