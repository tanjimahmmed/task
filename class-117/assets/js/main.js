(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     $(".portfolio_list").masonry({
        percentPosition: true
     });

     $(".single_portfolio_item").hover(function(){
        $(".single_portfolio_item .portfolio_hover h2").removeClass("animated fadeInUp");
        $(this).find(".portfolio_hover h2").addClass("animated fadeInUp");
     });

     $(".single_portfolio_item").hover(function(){
      $(".single_portfolio_item .portfolio_hover p").removeClass("animated fadeInDown");
      $(this).find(".portfolio_hover p").addClass("animated fadeInDown");
     });
     new WOW().init();

   //   menu trigger
   $(".menu_trigger").on('click', function(){
      $(".offcanvas_menu").addClass("active");
      $(".offcanvas_menu_overlay").addClass("active");
   });

   $(".menu_close i.fa, .offcanvas_menu_overlay").on('click', function(){
      $(".offcanvas_menu").removeClass("active");
      $(".offcanvas_menu_overlay").removeClass("active");
   });

   //smart header
   $(".header_area").headroom();
     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	