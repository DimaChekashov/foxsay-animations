document.querySelectorAll(".thumb-img").forEach((img) => {
    img.addEventListener("click", () => {
        document.querySelector(".starbucks").src = img.getAttribute("data-img");
        document.querySelector(".circle").style.background = img.getAttribute("data-circle");
    });
});

document.querySelector(".toggle").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".navigation").classList.toggle("active");
});
