const navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px"
}

let nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrolltop > 20){
        nav.classList.add("sticky");
    }
});

