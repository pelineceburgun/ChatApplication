const socket = io();


const input = document.getElementById('message-input');
const button = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages');

button.addEventListener('click', () => {
    const message = input.value.trim();
    if (message) {
        appendMessage(message, 'self');
        socket.emit('chat message', message);
        input.value = '';
    }
});

socket.on('chat message', (message) => {
    appendMessage(message, 'other');
});


function appendMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', type);
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; 
}


