(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


        // Sticky Navbar
        $(window).scroll(function () {
            if ($(this).scrollTop() > 90) {
                $('.nav-bar').addClass('nav-sticky');
                $('.carousel, .page-header').css("margin-top", "73px");
            } else {
                $('.nav-bar').removeClass('nav-sticky');
                $('.carousel, .page-header').css("margin-top", "0");
            }
        });


        // Dropdown on mouse hover
        $(document).ready(function () {
            function toggleNavbarMethod() {
                if ($(window).width() > 992) {
                    $('.navbar .dropdown').on('mouseover', function () {
                        $('.dropdown-toggle', this).trigger('click');
                    }).on('mouseout', function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    });
                } else {
                    $('.navbar .dropdown').off('mouseover').off('mouseout');
                }
            }
            toggleNavbarMethod();
            $(window).resize(toggleNavbarMethod);
        });


        // jQuery counterUp
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });


        // Modal Video
        $(document).ready(function () {
            var $videoSrc;
            $('.btn-play').click(function () {
                $videoSrc = $(this).data("src");
            });
            console.log($videoSrc);

            $('#videoModal').on('shown.bs.modal', function (e) {
                $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
            })

            $('#videoModal').on('hide.bs.modal', function (e) {
                $("#video").attr('src', '');
            })
        });


        // Testimonial Slider
        $('.testimonial-slider').slick({
            infinite: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.testimonial-slider-nav'
        });
        $('.testimonial-slider-nav').slick({
            arrows: false,
            dots: false,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: '22px',
            slidesToShow: 3,
            asNavFor: '.testimonial-slider'
        });
        $('.testimonial .slider-nav').css({ "position": "relative", "height": "160px" });


        // Blogs carousel
        $(".related-slider").owlCarousel({
            autoplay: true,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });


        // Portfolio isotope and filter
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });

    })(jQuery);

    //navbar
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section'); // All sections in the page
        const navLinks = document.querySelectorAll('.navbar a'); // All navbar links
      
        let currentSection = '';
      
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
      
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
          }
        });
      
        navLinks.forEach(link => {
          link.classList.remove('active'); // Remove active class from all links
          if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); // Add active class to the current section link
          }
        });
      });
      
//form to whatsapp
document.getElementById("sendWhatsAppButton").addEventListener("click", function () {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate required fields
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields before sending.");
        return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `Hello!%0A%0AMy Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`;

    // Replace with the phone number to send the message to
    const phoneNumber = "27785359200"; // Replace with your WhatsApp number (use country code without +)

    // Redirect to WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
});
