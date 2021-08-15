// DOM Ready
$(function () {

    console.log('Maieco Loaded...!')
    /*
    --------------------------------------------------
    Active class adding for sidemenu using url path
    --------------------------------------------------
    */

    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
    // Account for home page with empty path
    if (path == '') {
        path = 'index.php';
    }
    var target = $('.navbar li a[href="' + path + '"]');
    // Add active class to target link
    $('.navbar li').removeClass('active');
    target.parent().addClass('active');


    /*
    --------------------------------------------------
    Add Class for Navbar Header
    --------------------------------------------------
    */
    navbarAlignment();

    /*
    --------------------------------------------------
    Collapse Navbar on Outside Click
    --------------------------------------------------
    */
    // $(document).click(function (event) {
    //     var click = $(event.target);
    //     var _open = $(".navbar-collapse").hasClass("show");
    //     if (_open === true && !click.hasClass("navbar-toggler")) {
    //         $(".navbar-toggler").click();
    //     }
    // });
    /*
    -----------------------------------------------------------
    Hero Banner
    -----------------------------------------------------------
    */
    var homeHeroBanner = $('.js-hero-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        smartSpeed: 1200,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        touchDrag: false,
        mouseDrag: false,
        autoplay: true,
        autoPlaySpeed: 3000,
        autoPlayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // baner Animation
    homeHeroBanner.on("changed.owl.carousel", function (event) {
        // selecting the current active item
        var item = event.item.index - 2;
        // first removing animation for all captions
        $('.v-middle .title-small').removeClass('animated fadeInUp');
        $('.v-middle .title-main').removeClass('animated fadeInUp');
        $('.v-middle .title-descript').removeClass('animated fadeInUp');
        $('.v-middle .cta-banner-contact').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('.v-middle .title-small').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.v-middle .title-main').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.v-middle .title-descript').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.v-middle .cta-banner-contact').addClass('animated zoomIn');
    })

    /*
    -----------------------------------------------------------
    Distributors carousel
    -----------------------------------------------------------
    */
    $('.slider-distributors').owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        center: true,
        autoplay: false,
        smartSpeed: 1200,
        autoPlaySpeed: 2000,
        autoPlayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            600: {
                items: 2,
            },
            768: {
                dots: false,
                items: 2,
            },
            991: {
                items: 3,
            },
            1200: {
                items: 3,
                loop: true,
                nav: true,
            }
        }
    });

    $('.js-button-left').click(function () {
        $('.slider-distributors').trigger('next.owl.carousel');
    })
    $('.js-button-right').click(function () {
        $('.slider-distributors').trigger('prev.owl.carousel', [300]);
    });

    /*
    -----------------------------------------------------------
    Counter To Up JS
    -----------------------------------------------------------
    */
    $('.odometer').each(function () {
        $(this).appear(function () {
            var $this = $(this),
                $dataValue = $this.data('count');

            setTimeout(function () {
                $this.html($dataValue);
            }, 1000);
        })
    });

    /*
    -----------------------------------------------------------
    Rating Star
    -----------------------------------------------------------
    */
    $('#js-rating-star,#js-rating-service').ratingStar({
        afterClick: function (value, el) {
            $('.c-box').fadeIn(200);
            $('.c-box__body').html("<span>" + el.attr('title') + "</span>");
        }
    });
});

$(window).on('load resize', function (e) {

    /*
    --------------------------------------------------
    Preloader
    --------------------------------------------------
    */
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

    /*
    --------------------------------------------------
    Navbar Alignment
    --------------------------------------------------
    */
    navbarAlignment();
    /*
    --------------------------------------------------
    Sub Banner Alignment
    --------------------------------------------------
    */
    marginSubBanner()
});

// Navbar 
function navbarAlignment() {
    if ($(window).width() > 991) {
        $('.navbar').toggleClass('position-absolute nav-top', /\/index.php$/.test(location.pathname));
    }
    else {
        $('.navbar').removeClass('position-absolute nav-top', /\/index.php$/.test(location.pathname));
    }
}

function marginSubBanner() {
    if ($(window).width() < 992) {
        var navbarHeight = $('.navbar').height();
        $('.sub-banner-block , .home-banner').css('padding-top', navbarHeight);
    }
    else {
        $('.sub-banner-block , .home-banner').removeAttr("style");
    }
}

