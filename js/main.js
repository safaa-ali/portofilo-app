



 // PRE LOADER
 $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



//  $(window).scroll(function(){
//     var sc =  $(window).scrollTop()
//      if(sc>100){
//       $(".navbar").addClass("navbar-scroll")
//      console.log("welcome back")
 
//      }  
//      else {
//               $(".navbar").removeClass("navbar-scroll");
//            }
//    })
 

   /* 2. sticky And Scroll UP */
   $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      // $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      // $('#back-top').fadeIn(500);
    }
  });
// Scroll Up
  // $('#back-top a').on("click", function () {
  //   $('body,html').animate({
  //     scrollTop: 0
  //   }, 800);
  //   return false;
  // });




   
     // WOW ANIMATION
     new WOW({ mobile: false }).init();

$(document).ready(function(){
    $(".list-product ul li").click(function(){
        $(".list-product ul li").removeClass("activeLi")

        $(this).addClass("activeLi")
    })

})






