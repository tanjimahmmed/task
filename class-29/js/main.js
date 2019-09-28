(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     $(".homepage_slides").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	