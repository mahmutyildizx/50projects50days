const loadingText = document.querySelector(".loading-text");
const backgroundImage = document.querySelector(".background");

let loadingPercent = 0;

const blurringFunc = () => {
    loadingPercent++;

  if (loadingPercent > 99) {
    clearInterval(int);
  }

  loadingText.innerText = `${loadingPercent}%`;
  loadingText.style.opacity = scale(loadingPercent, 0, 100, 1, 0);
  backgroundImage.style.filter = `blur(${scale(loadingPercent, 0, 100, 25, 0)}px)`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const interval = setInterval(blurringFunc, 25);
