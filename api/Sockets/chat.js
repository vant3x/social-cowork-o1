
const socket = io()

let message = document.getElementById('message');
let user = document.getElementById('user');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let action = document.getElementById('action');

btn.addEventListener('click', function () {
    socket.emit('chat:message', {
        user: user.value,
        message: message.value
    })


    console.log({
        user: user.value,
        message: message.value
    });
});

socket.on('chat:message', function (data) {
    output.innerHTML += `<p>
    <strong> ${data.user}</strong>:${data.message}
    </p>`

})

