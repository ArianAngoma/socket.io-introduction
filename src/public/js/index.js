const socket = io('http://localhost:4000');

/* Referencias HTML */
const form = document.querySelector('#myForm');
const msg = document.querySelector('#myMsg');
const txtMsg = document.querySelector('#txtMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = txtMsg.value;

    /* Emitir mensaje al servidor */
    socket.emit('msg-to-server', {text});
});

/* Escuhar evento enviado desde el servidor */
socket.on('msg-from-server', (data) => {
    msg.innerHTML += `<li>${data.text}</li>`
});