const header = document.querySelector("#header");
const main = document.querySelector("#main");
const about = document.querySelector("#about");
const footer = document.querySelector("#footer");
const nightMode = document.querySelector(".night_mode");
const morningMode = document.querySelector(".morning_mode");
const search = document.querySelector("#search");
const button = document.querySelector("button");
const cardContainer = document.querySelector(".card-container");
const cardList = document.querySelector(".card-list");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const card = document.querySelector(".card");

sun.addEventListener("click", function () {
  sun.getAttribute("src") === "img/sun.svg"
    ? sun.setAttribute("src", "img/moon.svg")
    : sun.setAttribute("src", "img/sun.svg");

  header.classList.toggle("night_mode");
  header.classList.toggle("morning_mode");
  main.classList.toggle("night_main_bg");
  main.classList.toggle("morning_main_bg");
  footer.classList.toggle("night_mode");
  footer.classList.toggle("morning_mode");
});
