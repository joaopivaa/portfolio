// FUNÇÂO SCROLL

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("scrollTop", window.scrollY > 40)
});

// FUNÇÂO MENU

const body = document.querySelector("body");

function openMenu() {
    document.getElementById("navlist").classList.toggle("open");
    body.classList.toggle ("hidden");
}