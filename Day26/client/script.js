const chatWindow = document.getElementById("chatWindow");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const usernameInput = document.getElementById("usernameInput");

let username = "";

const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log("WebSocket connection established.");
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  displayMessage(message);
};

ws.onclose = () => {
  console.log("WebSocket connection closed.");
};

sendButton.addEventListener("click", () => {
  sendMessage();
});

messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (message && username) {
    const messageObj = {
      username: username,
      text: message,
    };
    ws.send(JSON.stringify(messageObj));
    messageInput.value = "";
  }
}

function displayMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.classList.add(
    message.username === username ? "user2" : "user1"
  );
  messageElement.innerHTML = `<span><strong>${message.username}:</strong> ${message.text}</span>`;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

usernameInput.addEventListener("blur", () => {
  username = usernameInput.value.trim();
});
