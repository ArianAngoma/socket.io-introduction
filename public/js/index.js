const socket = io('http://localhost:4000');

socket.on('msg-welcome', (data) => {
    console.log(data);
});