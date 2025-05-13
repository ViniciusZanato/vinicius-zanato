document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop === 0) {
            header.style.opacity = "1";
            header.style.pointerEvents = "auto";
        } else {
            header.style.opacity = "0";
            header.style.pointerEvents = "none";
        }
        lastScrollTop = scrollTop;
    });
});