$(document).ready(function() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top; {
            $('html,body').animate({ scrollTop: destination }, 1500);
        }
        return false;
    });

    (function($) {
        $(function() {
            $('.mobile-menu').on('click', function() {
                $(this).closest('.header-menu').toggleClass('mobile-menu--open');
            });
        });
    })(jQuery);

});

/*WORK SLIDER*/

$('.works-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000
});


//TEAM SLIDER 

$('.team-slider').slick({
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '-10px',
    initialSlide: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                initialSlide: 0,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                initialSlide: 0,
            }
        }
    ]
});


//WOW 
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();


// КАРТА
function initMap() {
    var uluru = { lat: 55.751244, lng: 37.618423 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
        disableDefaultUI: true,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: { lat: 55.750144, lng: 37.608413 },
        map: map,
        icon: 'img/pointer.png'
    });
};

document.addEventListener('DOMContentLoaded', initMap);