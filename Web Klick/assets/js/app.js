// PRELOADER
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish');
  });

// FUNCTION SCROLL MENU
window.addEventListener('scroll', () => {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
// FUNCITON TOGGLE MENU HAMBURGER AND MENU TEXT
var menuToggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');
menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
})

// function toggleMenu(){
//     var menuToggle = document.querySelector('.toggle');
//     var menu = document.querySelector('.menu');
//     menuToggle.classList.toggle('active');
//     menu.classList.toggle('active');
//   };
  

// FUNCTION BACK TO TOP
  jQuery("#backtotop").click( () =>{
    jQuery("body,html").animate({
      scrollTop:0
    },600);
  });
  
  jQuery(window).scroll( () =>{
    if(jQuery(window).scrollTop() > 150)
    {
      jQuery("#backtotop").addClass("visible");
    }
    else
    {
      jQuery("#backtotop").removeClass("visible");
    }
  });

// FUNCTION REVEAL ELEMENTS
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
};

// SELECT DATE SPAN
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();