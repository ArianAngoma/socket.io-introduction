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
    socket.emit('msg-welcome', {
        msg: 'Bienvenido al server',
        date: new Date()
    });

    /* Escuchar evento enviado por cliente */
    socket.on('msg-client', (data) => {
        console.log(data);
    });
});

server.listen(4000, () => {
    console.log('Server on port 4000')
});