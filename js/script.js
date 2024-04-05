window.onscroll = function() {
    Header_bottom()
};

let border = `
        border-bottom: 1px solid #434040;`

function Header_bottom() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById(".header").style = border ;
    } else {
        document.getElementById(".header").style = "";
    }
}

// function openMenu() {
//     document.getElementById("menu").classList.toggle("open");
//     document.getElementById("body").classList.toggle("hidden");
//     document.getElementById("header-menu").classList.toggle("fecha");
//     document.getElementById("header-close").classList.toggle("abre");
// }