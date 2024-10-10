window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.scrollY >= sticky) {
        // navbar.classList.add("fixed");
        navbar.style.top = '0';
    } else {
        // navbar.classList.remove("fixed");
        navbar.style.top = '6vh';
    }
}



