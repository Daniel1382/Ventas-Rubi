// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let MenuIcon = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

/* Animacion del menu */
btnMenu.addEventListener("click", ()  => {

    document.querySelector('.btn-menu i').classList.toggle('bx-window-close');

    if(activador){

        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false; 

    }else{
        activador=false;
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador=true;
    }

});

/* Intercalar clase active */
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

/*  efectos scroll  */ 
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.GO-TOP')

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;

    /* Mostrar y ocultar menu */
    if (prevScrollPos > currentScrollPos) {
        menuContent.style.top = '0px';
        menuContent.style.transition = '0.5s';
    }else{
        menuContent.style.top = '-60px';
        menuContent.style.transition = '0.5s';
    }
    prevScrollPos = currentScrollPos;
    /* estilis */

    let arriba = window.pageYOffset;

    if (arriba <= 600) {
        menuContent.style.borderBottom = "none"

        goTop.style.right = "-100%"
    }else{
        menuContent.style.borderBottom = "5px solid var(--red)"

        goTop.style.right = "0"
        goTop.style.transition = "0.5s"
    }

} 

goTop.addEventListener('click', () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
     
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
  
});

