const express = require('express')
const app = express()

//cấu hình env
require('dotenv').config()
const port = process.env.PORT
const database = require('./config/database.js');

//kết nối vs database
database.connect();
//end connect database


app.get('/tasks', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})