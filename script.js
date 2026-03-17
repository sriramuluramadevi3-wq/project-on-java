// Create WebSocket connection
let socket = new WebSocket("ws://localhost:8080/chat");

// When connection is opened
socket.onopen = function() {
    console.log("Connected to WebSocket Server");
};

// When message is received
socket.onmessage = function(event) {
    let chatBox = document.getElementById("chatBox");

    let message = document.createElement("p");
    message.textContent = event.data;

    chatBox.appendChild(message);
};

// When connection is closed
socket.onclose = function() {
    console.log("Disconnected from server");
};

// Send message function
function sendMessage() {
    let input = document.getElementById("messageInput");

    if(input.value.trim() !== ""){
        socket.send(input.value);
        input.value = "";
    }
}
