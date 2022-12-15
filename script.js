"use strict";
// console.log("hi");
const btnMenu = document.querySelector(".btn-menu");
const header = document.querySelector(".header");
btnMenu.addEventListener("click", function () {
  header.classList.toggle("menu-open");
  if (header.classList.contains("menu-open"))
    btnMenu.setAttribute("src", "./assets/images/icon-menu-close.svg");
  else btnMenu.setAttribute("src", "./assets/images/icon-menu.svg");
});
