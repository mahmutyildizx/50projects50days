const button = document.querySelector("#button");
const toasts = document.querySelector("#toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};

const createNotification = (message = null, type = null) => {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(type ? type : getRandomType());

  notification.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
};

button.addEventListener("click", () => createNotification());
