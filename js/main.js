



 // PRE LOADER
 $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



 $(window).scroll(function(){
    var sc =  $(window).scrollTop()
     if(sc>100){
      $(".navbar").addClass("navbar-scroll")
     console.log("welcome back")
 
     }  
     else {
              $(".navbar").removeClass("navbar-scroll");
           }
   })
 

   



   
     // WOW ANIMATION
     new WOW({ mobile: false }).init();

$(document).ready(function(){
    $(".list-product ul li").click(function(){
        $(".list-product ul li").removeClass("activeLi")

        $(this).addClass("activeLi")
    })

})






