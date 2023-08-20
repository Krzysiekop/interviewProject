const searchIcon = document.querySelector(".navigation__search_icon");
const searchBar = document.querySelector(".navigation__search_bar");

searchIcon.addEventListener("click", function () {
  if (window.getComputedStyle(searchBar).display === "none") {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none";
  }
});
