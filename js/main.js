(function ($) {
    "use strict";
    var psition  = 0;
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 750) {
            $('.navbar').css('display', 'flex');
        } else {
            $('.navbar').css('display', 'none');
        }
    });

    // Smooth scrolling on the navbar links and buttons
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            navigate(this)
        }
    });

    $(".linkButton").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            navigate(this)
        }
    });


    // // Typed Initiate
    // if ($('.typed-text-output').length == 1) {
    //     var typed_strings = $('.typed-text').text();
    //     var typed = new Typed('.typed-text-output', {
    //         strings: typed_strings.split(', '),
    //         typeSpeed: 100,
    //         backSpeed: 20,
    //         smartBackspace: false,
    //         loop: true
    //     });
    // }


    // // Modal Video
    // $(document).ready(function () {
    //     var $videoSrc;
    //     $('.btn-play').click(function () {
    //         $videoSrc = $(this).data("src");
    //     });
    //     console.log($videoSrc);

    //     $('#videoModal').on('shown.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     })

    //     $('#videoModal').on('hide.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc);
    //     })
    // });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $('.scroll-to-bottom').fadeOut(0);
        } else {
            $('.scroll-to-bottom').fadeIn(0);
        }
    });

    $('.scroll-to-bottom').click( (e) => {
        e.preventDefault();
        scrollToPos(850)
    });

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click( (e) => {
        e.preventDefault();
        scrollToPos(0)
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    

    //helper
    function navigate(linkItem){
        $('html, body').animate({
            scrollTop: $(linkItem.hash).offset().top - 45
        }, 1500, 'easeInOutExpo');
        
        if ($(linkItem).parents('.navbar-nav').length) {
            $('.navbar-nav .active').removeClass('active');
            $(linkItem).closest('a').addClass('active');
        }
    }

    function scrollToPos(pos) {
        $('html, body').animate({scrollTop: pos}, 1500, 'easeInOutExpo');
        position = pos;
        return false;
    }
})(jQuery);
