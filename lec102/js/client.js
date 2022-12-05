const socket = io("http://localhost:8010");

const form = document.getElementById("send-containar");
const msgInput = document.getElementById("msgInp");
const msgContainar = document.querySelector(".containar");

var audio = new Audio("ting.mp3");


const append = (messages, position) => {
    const messageElement = document.createElement("div");
    messageElement.innerText = messages;
    messageElement.classList.add("message");
    messageElement.classList.add(position);
    msgContainar.append(messageElement);
    if (position == "left") {
        audio.play();
    }
};

const m = window.prompt("Enter Your Name To Join");
socket.emit("new-user-joined", m);

socket.on("user-joined", name => {
    append(`${name} joined the chat`, `right`);
});

socket.on("msg-receive", data => {
    append(`${data.name}: ${data.message}`, `left`);
});

socket.on("msg-left", name => {
    append(`${name} left the chat`, `right`);
});


form.addEventListener("submit", (error) => {
    error.preventDefault();
    const message = msgInput.value;
    append(`You: ${message}`, `right`);
    socket.emit("msg-send", message);
    msgInput.value = "";
});


