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
       
    //    counter js
       $(".counter_nubmer span").counterUp({
        delay: 10,
        time: 1000
       });




     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	