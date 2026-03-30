document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    function updateNavbarState() {
        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });
});


