(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // -- start work -- //
        $(".homepage_area").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: false,
            dots: true
        });

        $(".logo_carousel").owlCarousel({
            items: 5,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:true
                }
            }
        });

        $(".sticky_header").sticky({

        });

        $(".smooth_menu a").on('click', function (event) {

            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var headerHieght = $(".header_area").height();
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - headerHieght
                }, 800);
            }
        });

        new WOW().init();

        // -- End work -- //

    });

    jQuery(window).load(function () {

    });

}(jQuery));	