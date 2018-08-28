var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMsg', {
        from: 'Sachin',
        text: 'Yup, that works'
    })
});

socket.on('disconnect', function ()  {
    console.log('Disconnected from server');
});

socket.on('newMsg', function(messgae) {
    console.log('New Msg', messgae);
});
