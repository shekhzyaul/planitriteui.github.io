(function($) {
	"use strict";
	

	$('.suggested-places').owlCarousel({
		margin: 30,
        loop: true,
        dots: false,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
	});
    $('.recommended-places').owlCarousel({
		margin: 30,
        loop: true,
        dots: true,
        autoplay: true,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
	})
}(jQuery));