let hamburgerMenu = document.querySelector(".hamburger-menu");
// "<i class="fa-solid fa-xmark"></i>"
let menuIcon = document.querySelector(".menu-icon");
let showMenu = document.querySelector(".showOffering");
let secondDropDownToggle = document.querySelector(".secondMenuDropdown");
let secondDropDownContent = document.querySelector(".second-dropdown-content");
let dropIcon = document.querySelector(".dropIcon")
let showOffering = false;
let showSecond = false;


function toggleMenu() {
    if (!showOffering) {
        menuIcon.style.transform = "rotate(180deg)";
        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");
        showMenu.style.visibility = "visible";
        secondDropDownContent.style.visibility = "hidden";
        dropIcon.classList.remove("fa-angle-up");
        dropIcon.classList.add("fa-angle-down");

        // Reset the menu state
        showOffering = true;
        showSecond = false;

    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        showMenu.style.visibility = "hidden";
        secondDropDownContent.style.visibility = "hidden";


        // Reset the menu state
        showOffering = false;
    }
}
function toggleSecondMenu() {
    console.log("hi")
    if (!showSecond && showOffering) {

        dropIcon.classList.remove("fa-angle-down");
        dropIcon.classList.add("fa-angle-up");
        secondDropDownContent.style.visibility = "visible";


        // Reset the menu state
        showSecond = true;
    } else {
        dropIcon.classList.remove("fa-angle-up");
        dropIcon.classList.add("fa-angle-down");
        secondDropDownContent.style.visibility = "hidden";


        // Reset the menu state
        showSecond = false;
    }
}
hamburgerMenu.addEventListener("click", toggleMenu)
secondDropDownToggle.addEventListener("click", toggleSecondMenu)


