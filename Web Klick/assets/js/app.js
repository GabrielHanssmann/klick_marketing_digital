//PRELOADER
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish');
  });

// FUNCION SCROLL MENU
window.addEventListener('scroll', () => {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  // FUNCION TOGGLE MENU HAMBURGER Y MENU TEXTO
  function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  };