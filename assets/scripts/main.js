var navLinks = document.getElementById("#mob-icon")
var navclass = document.querySelector(".nav-links")

function showMenu() {
    navclass.style.display = "block";
}

function hideMenu() {
    navclass.style.display = "none";
}


let nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrolltop > 20){
        nav.classList.add("sticky");
    }
});

