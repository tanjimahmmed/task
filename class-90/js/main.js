(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //

     $(".team_carousel").owlCarousel({
         items:3,
         nav:true,
         loop:true,
         autoplay:false,
         margin:30,
         navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
     });




     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	