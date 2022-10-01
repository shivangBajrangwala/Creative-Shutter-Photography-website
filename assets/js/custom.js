/*==========

Theme Name: CREATIVE SHUTTER -  PHOTOGRAPYH STUIDO HTML5 TEMPLATE
Theme Version: 1.0.0

==========*/

/*==========
----- JS INDEX -----
1. STICKY HEADER

2.NAVIGATION MENU

3.GALLERY SLIDER

4. BLOG SLIDER

5.VANILLA TILT

6. TESTIMONIAL SLIDER

7. NAVLINKS TO SECTION

8. SITE LOADER

9. MOBILE MENU

==========*/

$(document).ready(function() {

    // Whole Script Strict Mode Syntax
    "use strict";

    // STICKY HEADER

    jQuery(window).on('scroll', function() { // this will work when your window scrolled.
        var height = jQuery(window).scrollTop(); //getting the scrolling height of window
        if (height > 50) {
            jQuery(".site-header").addClass("sticky_head");
        } else {
            jQuery(".site-header").removeClass("sticky_head");
        }
    });

    // NAVIGATION MENU

    $(".menu-toggle").on('click', function() {
        $(".main-navigation").toggleClass("toggled");
    });
    $(".menu-toggle").on('click', function() {
        $("html").toggleClass("flow-hidden");
    });
    $(".close-toggle").on('click', function() {
        $(".main-navigation").removeClass("toggled");
    });
    $(".close-toggle").on('click', function() {
        $("html").removeClass("flow-hidden");
    });
    $(".nav-toggle").on('click', function() {
        $(".main-navigation").toggleClass("main-menu-toggle");
    });


    // GALLERY SLIDER

    var swiper1 = new Swiper(".main-galley-slider", {
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        grabCursor: true,
        autoplay: true,
        direction: 'horizontal',
        effect: 'slide',
        breakpoints: {
            2100: {
                slidesPerView: 7,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,

            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },

            401: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });


    // BLOG SLIDER

    var swiper2 = new Swiper(".blog-slider", {
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        autoplay: true,
        direction: 'horizontal',
        effect: 'slide',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            2100: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,

            },
            576: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            401: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        },

    });

    // Vanilla Tilt

    VanillaTilt.init(document.querySelector(".achivement-wp"), {
        max: 25,
        speed: 400
    });

    VanillaTilt.init(document.querySelectorAll(".achivement-wp"));

});

var swiper = null;


// TESTIMONIAL SLIDER
function initSwiper() {
    if (window.innerWidth <= 991) {
        var swiper3 = new Swiper('.main-testimonial', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 24,
            speed: 1000,
            direction: 'horizontal',
            effect: 'slide',
            autoplay: {
                delay: 3000,
                DisableOnInteraction: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                
            },
        });

        var swiper4 = new Swiper(".service-mob-slider", {
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            direction: 'horizontal',
            effect: 'slide',
            autoplay: {
                delay: 3000,
                DisableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
            },

        });
    }
}

var timer;

// NAVLINKS TO SECTION

window.addEventListener('resize', function() {
    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(initSwiper, 200);
});


initSwiper();

// SITE LOADER

jQuery(window).on('load resize', function() {
    $('.pre-loader').fadeOut();
    $('body').removeClass('body-fixed');
});


// MOBILE MENU 

jQuery(".navigation-bar .main-menu-container a").on('click', function() {
    jQuery(".main-navigation").removeClass("main-menu-toggle");
});