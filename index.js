const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//cấu hình env
require('dotenv').config()
const port = process.env.PORT
const database = require('./config/database.js');

//kết nối vs database
database.connect();
//end connect database

// parse application/json
app.use(bodyParser.json())

//gọi đến routes
const routes=require('./api/v1/routes/index.routes')


//routes
routes(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})