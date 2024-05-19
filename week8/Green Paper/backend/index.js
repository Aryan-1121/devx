const express = require('express');
const zod = require('zod');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const { connectToMongoDB } = require('./db/db');
const rootRouter = require('./routes/index');


dotenv.config();


const app = express();
app.use(express.json());      //body parser 
app.use(cors())                 //Since our frontend and backend will be hosted on separate routes, we need to use cors middleware


app.use('/api/v1', rootRouter)    // all requests starting with /api/v1 wil route to routes/route.js



app.get('/', (req, res) => {
  res.send('root route from index')
})


app.listen(5000, () => {
  connectToMongoDB();
  console.log('app listening to port 5000');
})








































