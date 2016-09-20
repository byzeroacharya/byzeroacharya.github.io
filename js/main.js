$(document).ready(function() {
    //Scroll Menu

    function menuToggle() {
        var windowWidth = $(window).width();

        if (windowWidth > 767) {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 300) {
                    $('.main-nav').addClass('fixed-menu animated slideInDown');
                } else {
                    $('.main-nav').removeClass('fixed-menu animated slideInDown');
                }
            });
        } else {

            $('.main-nav').addClass('fixed-menu animated slideInDown');

        }
    }

    menuToggle();


    // Carousel Auto Slide Off
    $('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
        interval: 5000
    });
    $('#sponsor-carousel ').carousel({
        interval: false
    });


    // Contact form validation
    var form = $('.contact-form');
    form.submit(function() {
        'use strict',
        $this = $(this);
        $.post($(this).attr('action'), function(data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        }, 'json');
        return false;
    });

    $(window).resize(function() {
        menuToggle();
    });

    $('.main-nav ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 900,
        scrollOffset: 0,
        scrollThreshold: 0.3,
        filter: ':not(.no-scroll)'
    });

});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(2016, 9, 8);
initializeClock('clockdiv', deadline);


$('.masonryImage').click(function() {
    if ($(this).find('.hiddenDiv').toggle().is(":visible")) {
        $("body").css("overflow", "hidden");
    } else {
        $("body").css("overflow", "auto");
    }
});
$(".cart").hover(function() {
    $(this).find("span").fadeIn('slow');
},
function() { $(this).find("span").fadeOut('medium');
});

// Google Map Customization
(function() {

    var map;

    map = new GMaps({
        el: '#gmap',
        lat: 13.0845,
        lng: 77.4851,
        scrollwheel: false,
        zoom: 16,
        zoomControl: true,
        panControl: false,
        streetViewControl: true,
        mapTypeControl: true,
        overviewMapControl: false,
        clickable: false,
    });

    var image = 'images/map-icon.png';
    map.addMarker({
        lat: 13.0845,
        lng: 77.4851,
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#3e8bff',
    });


    var styles = [

        {
            "featureType": "road",
            "stylers": [
                { "color": "#b4b4b4" }
            ]
        }, {
            "featureType": "water",
            "stylers": [
                { "color": "#d8d8d8" }
            ]
        }, {
            "featureType": "landscape",
            "stylers": [
                { "color": "#f1f1f1" }
            ]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#000000" }
            ]
        }, {
            "featureType": "poi",
            "stylers": [
                { "color": "#d9d9d9" }
            ]
        }, {
            "elementType": "labels.text",
            "stylers": [
                { "saturation": 1 },
                { "weight": 0.1 },
                { "color": "#000000" }
            ]
        }

    ];

    map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
    });

    map.setStyle("map_style");
}());

