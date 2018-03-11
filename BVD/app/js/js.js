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

//IZOTOP
/*var grid = $('.portfolio-works').isotope({
    itemSelector: '.works_item',
    layoutMode: 'masonry',
    masonry: {
        gutter: 20
      }
});*/
var gridItem = $('.works-card').isotope({
    itemSelector: '.works_item',
    layoutMode: 'masonry',
    masonry: {
        gutter: 10
      }
})
var grid = $('.portfolio-works');

$('.portfolio_filter').click(function() {
    let filterValue = $( this ).attr('data-filter');
    grid.isotope({ filter: filterValue });

    $(".portfolio_filter").removeClass("active-filter");
    $(this).addClass("active-filter");
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
        scrollwheel: false,
        styles: [
            { "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
            { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: { lat: 55.750144, lng: 37.608413 },
        map: map,
        icon: 'img/pointer.png'
    });
};

document.addEventListener('DOMContentLoaded', initMap);