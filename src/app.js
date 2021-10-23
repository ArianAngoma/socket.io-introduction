const express = require('express');

/* Servidor de Express */
const app = express();

/* Servidor de Sockets */
const server = require('http').createServer(app);

/* Configuración de socket server */
const io = require('socket.io')(server);

/* Desplegar el directorio público */
app.use(express.static(__dirname + '../../public'));

io.on('connection', (socket) => {
    // console.log(socket.id);

    /* Escuchar evento enviado desde el cliente */
    socket.on('msg-to-server', (data) => {
        console.log(data);

        /* Emitir a todos los clientes conectados */
        io.emit('msg-from-server', data);
    });
});

server.listen(4000, () => {
    console.log('Server on port 4000')
});