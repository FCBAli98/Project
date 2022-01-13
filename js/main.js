
let scroll = document.getElementById('scroll');
window.addEventListener('scroll', function () {

    scroll.classList.toggle('active', window.scrollY > 0);
});


let nav = document.getElementById('nav');
let btn =document.getElementById("btn-menu");
let navMenu = document.getElementById("nav-menu");


let navItems = document.querySelectorAll(".navbar-menus");
navItems.forEach(navItems =>{
    navItems.addEventListener('click', ()=>{
        // btn.classList.remove('active');
        // navMenu.classList.remove('active');
        // nav.classList.remove('active');
    })
});

btn.addEventListener('click', () =>{
    btn.classList.toggle('active');
    nav.classList.toggle("active");
    navMenu.classList.toggle('active');
});






function locatt(text) {
    console.log(text);
    let url = text;
    if (text) {
        location.assign("./components" + url);
    }
}


let menu1 = document.getElementById("menu1");
console.log(menu1);
function menubar() {
    if (menu1 !== ""){
        menu1 = true
    }else if (menu1) {
        menu1 = false
    }
}


function loc(text2) {
    console.log(text2);
    if (text2) {
        location.assign(text2)
    }
}
// ;console.log(locate);

ymaps.ready(init)
function init() {
    let map = new ymaps.Map('map', {
        center: [38.8494135289684, 65.2688775291336],
        zoom: 15
    });
}