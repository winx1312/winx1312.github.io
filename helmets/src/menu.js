const nav = document.getElementById("nav");

const burg = document.querySelector(".burger").addEventListener('click', function() {
    nav.style.opacity = 1
    nav.style.zIndex = 90;
})
document.querySelector(".nav__close").addEventListener("click", function() {
    nav.style.opacity = 0
    nav.style.zIndex = 1;
})