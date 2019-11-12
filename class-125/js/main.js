(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //

     $(".portfolio_list").masonry();

     $(".count").counterUp({
         delay:10,
         time:1000,
     });

     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	