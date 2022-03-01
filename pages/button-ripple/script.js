const btn = document.querySelector(".btn");

btn.addEventListener("mousemove", function (e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
});
