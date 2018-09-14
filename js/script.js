$(document).ready(function() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 3000,
        easing: 'easeInOutQuint',
        offset: 70
    });

    AOS.init({
        duration: 1000,
        offset: 300
    });


    // Main slide
    $('#main-slide .carousel').carousel({
        interval: 20000
    })

    // About slide
    $(".about-slide").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Products slide
    $(".products-slide").owlCarousel({
        loop: true,
        autoplay: false,
        items: 1
    });

    // Services slide
    $(".services-slide").owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // Video modal
    $("#videoModal").on('hidden.bs.modal', function(e) {
        $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
    });

    // 
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.btn-top').addClass('show');
        } else {
            $('.btn-top').removeClass('show');
        }
    });
});

$(document).on('click.bs.dropdown.data-api', '.dropdown-filter', function(e) {
    e.stopPropagation();
});