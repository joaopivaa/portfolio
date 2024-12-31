// FUNÇÃO SCROLL

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("scrollTop", window.scrollY > 40)
});

// CONTROLE DE OPÇÕES

var open = document.querySelector('.header-open');
var close = document.querySelector('.header-close');

open.addEventListener('click', function () {
    if (open.style.display === 'none') {
        open.style.display = 'block';
        close.style.display = 'none';
    }
    else {
        open.style.display = 'none';
        close.style.display = 'block';
    }
});

close.addEventListener('click', function () {
    if (close.style.display === 'none') {
        close.style.display = 'block';
        open.style.display = 'none';
    }
    else {
        close.style.display = 'none';
        open.style.display = 'block';
    }
});

// FUNÇÃO MENU

const body = document.querySelector("body");

function openMenu() {
    document.getElementById("navlist").classList.toggle("open");
    body.classList.toggle ("hidden");
}

function closeMenu() {
    document.getElementById("navlist").classList.remove("open");
    body.classList.remove("hidden");
    open.style.display = "block" ;
    close.style.display = "none" ;
}