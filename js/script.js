const burgermenu = document.querySelector(".burger_menu");
const navMenu = document.querySelector(".navmenu");

burgermenu.addEventListener("click", ()=>{
    burgermenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", ()=>{
    burgermenu.classList.remove("active");
    navMenu.classList.remove("active");

}))
