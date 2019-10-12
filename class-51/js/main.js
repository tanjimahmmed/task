(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     $('.map')
     .gmap3({
       center:[42.3726399, -71.1096528],
       zoom: 14
     })
     .bicyclinglayer();




     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	