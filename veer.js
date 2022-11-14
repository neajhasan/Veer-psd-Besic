
// Back To Top START
$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
           if( scroll > 400 ){
            $('.menubar').addClass('menu_bg');
           } else {
              $('.menubar').removeClass('menu_bg')
           }

         if(scroll > 600) {
            $('.back_to_top').show(1000);
        } else {
            $('.back_to_top').hide(1000);
         }
    });
    $('.back_to_top').on('click', function(){
        $('html, body').animate({scrollTop:0},1000)
    });
    
    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });
});


// VenuBox Start
new VenoBox({
    selector: '.my-video-links',
});
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// Swiper Start
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    loop: true,
    autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
    navigation: {
    
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      el: ".swiper-pagination",
    },
  });
  new WOW().init();

 // Time_conunt Stsar
 function timeCounter(){
    var now = new Date().getTime();
    var deadLine = new Date("january 26, 2023 12:00:00").getTime();
   
    var total = deadLine - now;
   
   var s = Math.floor(total / 1000);
   var m =  Math.floor(s / 60);
   var h =  Math.floor(m / 60);
   var d =  Math.floor(h / 24);
   
   s %= 60;
   m %= 60;
   h %= 24;
   
    d = (d< 10) ? "0" + d : d;
    h = (h< 10) ? "0" + h : h;
    m = (m< 10) ? "0" + m : m;
    s = (s< 10) ? "0" + s : s;
   
   document.getElementById("days").innerText = d;
   document.getElementById("hours").innerText = h;
   document.getElementById("minutes").innerText = m;
   document.getElementById("seconds").innerText = s;
   }
   setInterval(timeCounter, 1000);





