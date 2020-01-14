const hel = document.querySelector(".const")
const helmets = document.querySelectorAll(".const__helmet")
const helmetsI = document.getElementById('helmets')
window.addEventListener('scroll', function(event) {
    if (pageYOffset > 900) {
        hel.classList.add("visable")
    } else if (pageYOffset > 1200) {
        document.getElementById("wrapA").classList.add("glass-animate")
    }

})
document.querySelector('.header__customize').addEventListener("click", function() {
    window.scrollTo(pageYOffset, 950);
});
const optItem = document.querySelectorAll('.style__opt-item');
const circ = document.querySelectorAll('.helper')
optItem.forEach(i => {
    i.addEventListener('click', () => function(optItem) {
        optItem.classList.add('Chosen')

    })
})