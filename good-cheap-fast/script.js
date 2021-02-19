const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

const doTheTrick = (theClickedOne) => {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) return (fast.checked = false);

    if (cheap === theClickedOne) return (good.checked = false);

    if (fast === theClickedOne) return (cheap.checked = false);
  }
};

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);
