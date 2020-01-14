const nav = document.getElementById("nav");

const burg = document.querySelector(".burger").addEventListener('click', function() {
    nav.classList.add('nav__active')
    nav.style.zIndex = 90;
})
document.querySelector(".nav__close").addEventListener("click", function() {
    nav.classList.remove('nav__active')
    nav.style.zIndex = 1;
})