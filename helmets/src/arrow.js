const arrow = document.createElement("div")
arrow.classList.add("arrow")
arrow.addEventListener("click", function() {
    window.scrollTo(pageYOffset, 0);
});
window.addEventListener('scroll', function(event) {
    if (pageYOffset < document.documentElement.clientHeight) {
        arrow.classList.add('arrow-r')
        arrow.style.transition = "transform"
        arrow.style.opacity = 0
    } else {
        arrow.classList.remove("arrow-r")
        arrow.style.opacity = 1
    }
});
document.body.append(arrow)