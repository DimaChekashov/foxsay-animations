const bg = document.getElementById("header");

window.addEventListener("scroll", function () {
    bg.style.backgroundSize = 200 - +window.pageYOffset / 12 + "%";
    bg.style.opacity = 1 - +window.pageYOffset / 1000 + "";
});
