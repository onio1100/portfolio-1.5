const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
let navStatus = false;

function scrollSwitch(){
    if(navStatus){
        mobileNavSwitch();
    }
}

function mobileNavSwitch() {
    navList.classList.toggle("nav-list-on");
    hamburger.classList.toggle("nav-mobile-hamburger-on");
    navStatus ? navStatus = false : navStatus = true;
}

hamburger.addEventListener("click", mobileNavSwitch);
// navList.addEventListener("click", mobileNavSwitch);
document.addEventListener("scroll", scrollSwitch);