// // // // // //
// Mobile menu //
// // // // // //

const mobile_toggle = document.getElementById("mobile-toggle");
const mobile_menu = document.getElementById("mobile-menu");
const mobile_links = document.querySelectorAll(".menu-link");
const body = document.querySelector("body");

// Mobile menu active flag
let menu_active = false;

const toggleMenu = () => {
    if (window.innerWidth < 998) {
        if (!menu_active) {
            body.style.overflow = "hidden";
            mobile_menu.classList.add("show-mobile");
            mobile_menu.classList.remove("hide-mobile");
            setTimeout(() => (menu_active = true));
        } else {
            body.style.overflow = "visible";
            mobile_menu.classList.add("hide-mobile");
            mobile_menu.classList.remove("show-mobile");
            setTimeout(() => (menu_active = false));
        }
    }
};

// Toggle mobile menu - click on menu icon
mobile_toggle.addEventListener("click", () => {
    toggleMenu();
});

// Hide mobile menu after click on link
let link_active = false;
mobile_links.forEach(link => {
    link.addEventListener("click", () => {
        if (!link_active) {
            link_active = true;
            toggleMenu();

            setTimeout(() => {
                link_active = false;
            }, 300);
        }
    });
});

// Hide after click outside the menu
document.addEventListener("click", e => {
    if (e.target !== mobile_menu && menu_active) {
        toggleMenu();
    }
});

// Show only on width >=998px
window.addEventListener("resize", e => {
    if (window.innerWidth >= 998) mobile_menu.classList = "menu";
});

// // // // // // // //
// Light box gallery //
// // // // // // // //

var lightbox = $('.gallery a').simpleLightbox();