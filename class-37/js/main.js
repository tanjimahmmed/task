(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     $(".featured_tailors_carousel").owlCarousel({
        items: 1,
        loop: true,
        margin:false,
        autoplay: false,
        dots: true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        //navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],//
     });
     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	