const images = document.querySelector("#imgs");
const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const image = document.querySelectorAll("#imgs img");

let idx = 0;

const run = () => {
  idx++;
  changeImage();
};

let interval = setInterval(run, 2000);

const changeImage = () => {
  if (idx > image.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = image.length - 1;
  }

  images.style.transform = `translateX(${-idx * 500}px)`;
};

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

rightButton.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftButton.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
