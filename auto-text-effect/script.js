const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");
const text = "We Love Programming!";
let index = 1;
let speed = 300 / speedEl.value;

const writeText = () => {
  textEl.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
};
writeText();

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
