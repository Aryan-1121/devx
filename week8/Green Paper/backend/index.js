const express = require('express');
const mongoose = require('mongoose')
const zod = require('zod');
const { connectToMongoDB } = require('./db/db');






const app = express();

app.get('/', (req, res) => {
  res.send('root get ')
})


app.listen(5000, () => {
  connectToMongoDB();
  console.log('app listening to port 5000');
})








































