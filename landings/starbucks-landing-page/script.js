function imgSlider(url) {
    document.querySelector(".starbucks").src = url;
}

function changeCircleColor(color) {
    const circle = document.querySelector(".circle");

    circle.style.background = color;
}

document.querySelectorAll(".thumb-img").forEach((img) => {
    img.addEventListener("click", () => {
        imgSlider(img.getAttribute("data-img"));
        changeCircleColor(img.getAttribute("data-circle"));
    });
});
