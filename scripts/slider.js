const right = document.querySelector(".slaider__navi--right");
const left = document.querySelector(".slaider__navi--left");
const sliders = ["slider1", "slider2", "slider3"];

let index = 0;

right.addEventListener("click", function () {
  index++;
  if (index === sliders.length) {
    index = 0;
    document.querySelector(`.${sliders[sliders.length - 1]}`).style.display =
      "none";
    document.querySelector(`.${sliders[0]}`).style.display = "flex";
  } else {
    document.querySelector(`.${sliders[index]}`).style.display = "flex";
    document.querySelector(`.${sliders[index - 1]}`).style.display = "none";
  }
});

left.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = 2;
    document.querySelector(`.${sliders[index]}`).style.display = "flex";
    document.querySelector(`.${sliders[0]}`).style.display = "none";
  } else {
    document.querySelector(`.${sliders[index]}`).style.display = "flex";
    document.querySelector(`.${sliders[index + 1]}`).style.display = "none";
  }
});
