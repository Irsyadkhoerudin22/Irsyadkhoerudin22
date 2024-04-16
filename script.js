// toggle class active menus
const navbarNav = document.querySelector(".navbar-nav");
// ketika diklik
document.querySelector("#menus-menus").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active search
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventdefault();
};
//  ketika klik diluar element
const menus = document.querySelector("#menus-menus");
const sebttn = document.querySelector("#search-box");

document.addEventListener("click", function (e) {
  if (!menus.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sebttn.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
});
