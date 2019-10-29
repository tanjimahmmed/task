(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //

     $(".homepage_slides").owlCarousel({
         items:1,
         nav:true,
         loop:true,
         autoplay:true,
         navText:['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
         mouseDrag:false,
         touchDrag:false
     });

     $(".homepage_slides").on("translate.owl.carousel", function () {
        $(".single_slide_item h4, h2").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slide_item .boxed_btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".homepage_slides").on("translated.owl.carousel", function () {
        $(".single_slide_item h4, h2").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slide_item .boxed_btn").addClass("animated fadeInDown").css("opacity", "1");
    });
    new WOW().init();
     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	