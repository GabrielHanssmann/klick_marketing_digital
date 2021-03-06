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
  

// FUNCION BACK TO TOP
  jQuery("#backtotop").click(function(){
    jQuery("body,html").animate({
      scrollTop:0
    },600);
  });
  
  jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop() > 150)
    {
      jQuery("#backtotop").addClass("visible");
    }
    else
    {
      jQuery("#backtotop").removeClass("visible");
    }
  });