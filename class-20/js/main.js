(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
    $(".projects_title li").on('click',function(){
        
      $(".projects_title li").removeClass("active");
      $(this).addClass("active");

    var selector = $(this).attr('data-filter');
    $(".projects_lists").isotope({
        filter:selector
    });
    });




     // -- End work -- //
            
    });

   jQuery(window).load(function(){
    jQuery(".projects_lists").isotope();

   });

}(jQuery));	