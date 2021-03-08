import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMessgae = document.getElementById("jsSendMessage");

const appendMessage = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  } : </span>${text}
    `;
  messages.appendChild(li);
};

const handleSendMessage = (event) => {
  event.preventDefault();
  const input = sendMessgae.querySelector("input");
  const { value } = input;
  getSocket().emit(window.events.sendMessgae, { message: value });
  input.value = "";
  appendMessage(value);
};

export const handleNewMessage = ({ message, nickname }) =>
  appendMessage(message, nickname);

if (sendMessgae) {
  sendMessgae.addEventListener("submit", handleSendMessage);
}
