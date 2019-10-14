(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // -- start work -- //
        $(".homepage_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: true
                }
            }
        });

        $(".listing_carousel").owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        
        });

        $(".new_arrivals_sides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });

        $(".deal_slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });

        $(".listing_carousel2").owlCarousel({
            items: 4,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });

        $(".large_image").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });

        $(".testimonial_carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });

        $(".special_carousel").owlCarousel({
            items: 6,
            loop: true,
            margin: 30,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });
        //check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeout();
            }
        });
        //Click event to scroll to top
        $('.scrollToTop').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        new WOW().init();
       

    //     var footerheight = $(".footer_area").height();
	// $(".site_main_wrapper").css('margin-bottom', footerheight + 'px');

        // -- End work -- //

    });

    jQuery(window).load(function () {




    });

}(jQuery));	