require('./config/config');

const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const Port = process.env.PORT;

var app = express();
app.use(express.static(publicPath));


app.listen(Port, ()=> {
    console.log(`Server started on port ${Port}`)
});