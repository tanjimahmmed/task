(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     $(".portfolio_list").masonry({
        horizontalOrder: true
     });

     $(".portfolio_filter li").on('click', function(){
        var filterData = $(this).attr("data-filter");

      $(".portfolio_list").isotope({
         filter: filterData,
      });

      $(".portfolio_filter li").removeClass('active');
      $(this).addClass('active');
     });

     $(".portfolio_list").isotope({
      itemSelector: '.single_portfolio_item',
      percentPosition: true,
      masonry: {
      columnWidth: '.single_portfolio_item',
      horizontalOrder: true
      }
     });


     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	