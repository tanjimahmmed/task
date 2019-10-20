(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     $('#web_design_progressbar').circleProgress({
        value: 0.90,
        size: 200,
        thickness:2,
        emptyFill:'#fff',
        fill: {
          gradient: ["#0689C3", "#06C0C1"]
        }
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress_percentage').html(Math.round(90 * progress) + '<i>%</i>');
    });

    $('#graphic_design_progressbar').circleProgress({
        value: 0.95,
        size: 200,
        thickness:2,
        emptyFill:'#fff',
        fill: {
          gradient: ["#0689C3", "#06C0C1"]
        }
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress_percentage').html(Math.round(95 * progress) + '<i>%</i>');
    });

    $('#digital_marketing_design_progressbar').circleProgress({
        value: 0.84,
        size: 200,
        thickness:2,
        emptyFill:'#fff',
        fill: {
          gradient: ["#0689C3", "#06C0C1"]
        }
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress_percentage').html(Math.round(84 * progress) + '<i>%</i>');
    });


     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	