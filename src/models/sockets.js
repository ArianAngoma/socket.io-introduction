class Sockets {
    constructor(io) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        /* On connection */
        this.io.on('connection', (socket) => {
            // console.log(socket.id);

            /* Escuchar evento enviado desde el cliente: msg-to-server */
            socket.on('msg-to-server', (data) => {
                console.log(data);

                /* Emitir a todos los clientes conectados */
                this.io.emit('msg-from-server', data);
            });
        });
    }
}

module.exports = Sockets;