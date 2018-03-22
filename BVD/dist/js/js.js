$(document).ready(function() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top; {
            $('html,body').animate({ scrollTop: destination }, 1000);
        }
        return false;
    });

    //TIMER
    (function() {

        var finishDate = new Date(2018, 3, 30);
        var compareDate = finishDate.getTime();

        var timer = setInterval(function() {
            timeBetweenDates(compareDate);
        }, 1000);

        function timeBetweenDates(toDate) {

            var difference = toDate - Date.now();

            if (difference <= 0) {

                clearInterval(timer);

            } else {

                var seconds = Math.floor(difference / 1000);
                var minutes = Math.floor(seconds / 60);
                var hours = Math.floor(minutes / 60);
                var days = Math.floor(hours / 24);

                hours %= 24;
                minutes %= 60;
                seconds %= 60;

                if (days < 10) days = '0' + days;
                if (hours < 10) hours = '0' + hours;
                if (minutes < 10) minutes = '0' + minutes;
                if (seconds < 10) seconds = '0' + seconds;

                $(".days").text(days);
                $(".hours").text(hours);
                $(".minutes").text(minutes);
                $(".seconds").text(seconds);
            }
        }
    })();
});

//POPUP
$(document).ready(function() {
    /*var delay_popup = 3000;
    setTimeout("document.querySelector('.popup').style.display='block'", delay_popup);*/
    $('.popup').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
        function() { // пoсле выпoлнения предъидущей aнимaции
            $('#popup')
                .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                .animate({ opacity: 1, top: '50%' }, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
});
/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
$('.popup-close, .popup').click(function() { // лoвим клик пo крестику или пoдлoжке
    $('.popup-window')
        .animate({ opacity: 0, top: '45%' }, 500, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
            function() { // пoсле aнимaции
                $(this).css('display', 'none'); // делaем ему display: none;
                $('.popup').fadeOut(400); // скрывaем пoдлoжку
            }
        );
});

/*MASKINPUT*/
jQuery(function($) {
    $(".phone").mask("+39(999) 999-9999");
});


/*WORKS SLIDER*/

$('#slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000
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