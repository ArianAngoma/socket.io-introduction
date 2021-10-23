const socket = io('http://localhost:4000');

socket.on('msg-welcome', (data) => {
    console.log(data);
});

setTimeout(() => {
    socket.emit('msg-client', {
        msg: 'Client',
        name: 'Arian Angoma Vilchez'
    });
}, 2000);