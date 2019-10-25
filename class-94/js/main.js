(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
$(".product_carousel").owlCarousel({
    items:4,
    nav:true,
    dots:false,
    autoplay:true,
    loop:true,
    margin:30,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
});




     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	