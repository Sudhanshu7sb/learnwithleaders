let hamburgerMenu = document.querySelector(".hamburger-menu");
// "<i class="fa-solid fa-xmark"></i>"
let menuIcon = document.querySelector(".menu-icon");
let showMenu = document.querySelector(".showOffering");
let secondDropDownToggle = document.querySelector(".secondMenuDropdown");
let secondDropDownContent = document.querySelector(".second-dropdown-content");
let showOffering = false;
let showSecond=false;


function toggleMenu() {
    if (!showOffering) {
        menuIcon.style.transform = "rotate(180deg)";
        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");
        showMenu.style.visibility = "visible";


        // Reset the menu state
        showOffering = true;
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        showMenu.style.visibility = "hidden";


        // Reset the menu state
        showOffering = false;
    }
}
function toggleSecondMenu() {
    console.log("hi")
    if (!showSecond) {
        

        // menuIcon.classList.add("fa-xmark");
        secondDropDownContent.style.visibility = "visible";


        // Reset the menu state
        showSecond = true;
    } else {
        // menuIcon.classList.remove("fa-xmark");
        // menuIcon.classList.add("fa-bars");
        secondDropDownContent.style.visibility = "hidden";


        // Reset the menu state
        showSecond = false;
    }
}
hamburgerMenu.addEventListener("click", toggleMenu)
secondDropDownToggle.addEventListener("click", toggleSecondMenu)


