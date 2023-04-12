
var swiper = new Swiper(".home-slider", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});




var swiper = new Swiper(".review-slider", {
  spaceBetween:20,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1604: {
      slidesPerView:4,
    },
  },
});




  let menu = document.querySelector("#menu-bars")
  let navbar =document.querySelector("header .navbar")

    menu.onclick=function(){
      navbar.classList.toggle("active")
    }  


     let navbar1=document.getElementById("#navbar")
    if (window.screen.width <= 600) { 
 
      navbar1.forEach(function(ele){
        ele.onclick =function(){
          this.style.display="none"
        }
      })
    
    }

    let search= document.querySelector('#search-icon');
    let close = document.querySelector('#close');

    
search.onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

close.onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}



function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;



