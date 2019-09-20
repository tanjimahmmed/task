(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".product_list").masonry();

        $(".hompage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav:true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });

        $(".product_promotion").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav:false,
        });

        $(".menu_trigger").on("click",function(){
        
            $(".off_canva_menu, .off_canva_overlay").addClass("active");
            return false;
        });

        $(".menu_close,.off_canva_overlay").on("click",function(){
        
            $(".off_canva_menu, .off_canva_overlay").removeClass("active");
        });

    });

   jQuery(window).load(function(){

   });

}(jQuery));	