(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     $(".project_filter li").on('click',function(){
         $(".project_filter li").removeClass("active");
         $(this).addClass("active");
         var selector = $(this).attr('data-filter');

         $(".project-list").isotope({
             filter:selector,
         });
     });
       $(".project-list").isotope()
       




     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	