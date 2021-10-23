const Server = require('./models/server');

const server = new Server();
server.execute();

/*
io.on('connection', (socket) => {
    // console.log(socket.id);

    /!* Escuchar evento enviado desde el cliente *!/
    socket.on('msg-to-server', (data) => {
        console.log(data);

        /!* Emitir a todos los clientes conectados *!/
        io.emit('msg-from-server', data);
    });
});*/
