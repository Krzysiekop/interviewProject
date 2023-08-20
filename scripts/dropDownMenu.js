const menuItemOferty = document.querySelector(".navigation__list--oferta");
const dropMenu = document.querySelector(".dropMenu");

menuItemOferty.addEventListener("mouseover", function () {
  dropMenu.style.visibility = "visible";
  dropMenu.style.opacity = "1";
});

menuItemOferty.addEventListener("mouseout", function () {
  dropMenu.style.visibility = "hidden";
});

menuItemOferty.addEventListener("click", function () {
  if (window.getComputedStyle(dropMenu).visibility === "hidden") {
    dropMenu.style.visibility = "visible";
    dropMenu.style.opacity = "1";
  } else {
    dropMenu.style.visibility = "hidden";
  }
});
