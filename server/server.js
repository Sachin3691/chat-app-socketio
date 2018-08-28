require('./config/config');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT;

var app = express();

app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket)=> {
    console.log('new user connected');

    socket.emit('newMsg', {
        from: 'John',
        text: 'Hello Msg',
        createdAt: 123123
    });

    socket.on('createMsg', (message) => {
        console.log('Create Message', message);
    });



});

io.on('disconnect', (socket)=> {
    console.log('user was disconnected');
});



server.listen(port, ()=> {
    console.log(`Server started on port ${port}`)
});