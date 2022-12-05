let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let navList = document.querySelector(".nav-list");
let rightNav = document.querySelector(".rightNav");


burger.addEventListener("click", () => {
    navbar.classList.toggle("h-nav-resp");
    navList.classList.toggle("v-class-resp");
    rightNav.classList.toggle("v-class-resp");
});
