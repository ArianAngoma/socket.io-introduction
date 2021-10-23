const socket = io('http://localhost:4000');

/* Referencias HTML */
const form = document.querySelector('#myForm');
const msg = document.querySelector('#myMsg');

socket.on('msg-welcome', (data) => {
    console.log(data);
});