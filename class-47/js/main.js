(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
$(".theme-1-select").on('click',function(){
    $("body").addClass("them_1").removeClass("them_2");
    return false;
});
$(".theme-2-select").on('click',function(){
     $("body").addClass("them_2").removeClass("them_1");
     $("html").css("height","100%");
     return false;
});




     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	