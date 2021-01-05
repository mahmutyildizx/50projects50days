const progressLine = document.querySelector("#progressLine");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const progressCircles = document.querySelectorAll(".progressCircle");

let currentActive = 1;

const updateFunction = () => {
  progressCircles.forEach((item, index) => {
    if (index < currentActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progressLine.style.width =
    ((actives.length - 1) / (progressCircles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    previousButton.disabled = true;
  } else if (currentActive === progressCircles.length) {
    nextButton.disabled = true;
  } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
  }
};

nextButton.addEventListener("click", () => {
  currentActive++;

  if (currentActive > progressCircles.length) {
    currentActive = progressCircles.length;
  }

  updateFunction();
});

previousButton.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updateFunction();
});
