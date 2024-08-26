const express = require('express');
const cors =    require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

//chuyển về dạng json
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//tạo 1 get request
app.get('/api', function (req, res) {
    res.status(200).json("Hello, world!");
})
app.listen(3000, ()=>{
    console.log("Server is listening on port")
});
