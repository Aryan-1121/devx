const express = require('express');
const zod = require('zod');
const { connectToMongoDB } = require('./db/db');
const dotenv = require('dotenv');
const rootRouter = require('./routes/index');



const app = express();
app.use(express.json());


app.use('/api/v1', rootRouter)    // all requests starting with /api/v1 wil route to routes/route.js


dotenv.config();

app.get('/', (req, res) => {
  res.send('root route from index')
})


app.listen(5000, () => {
  connectToMongoDB();
  console.log('app listening to port 5000');
})








































