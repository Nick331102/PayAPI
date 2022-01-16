const burger = document.querySelector(".hamburger")
const menu = document.querySelector(".nav__menu--container")



burger.addEventListener("click", () => {
menu.classList.toggle("slide");
burger.classList.toggle("clicked")



})