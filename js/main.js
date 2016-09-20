$(document).ready(function() {
    //Scroll Menu

    function menuToggle() {
        var windowWidth = $(window).width();

        if (windowWidth > 767) {
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 300) {
                    $(".main-nav").addClass("fixed-menu animated slideInDown");
                } else {
                    $(".main-nav").removeClass("fixed-menu animated slideInDown");
                }
            });
        } else {

            $(".main-nav").addClass("fixed-menu animated slideInDown");

        }
    }

    menuToggle();

    // Carousel Auto Slide Off
    $("#event-carousel, #twitter-feed, #sponsor-carousel").carousel({
        interval: 5000
    });
    $("#sponsor-carousel").carousel({
        interval: false
    });


    // Contact form validation
    var form = $(".contact-form");
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

    $(".main-nav ul").onePageNav({
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


$(".masonryImage").click(function() {
    if ($(this).find(".hiddenDiv").toggle().is(":visible")) {
        $("body").css("overflow", "hidden");
    } else {
        $("body").css("overflow", "auto");
    }
});

$(".cart").hover(function() {
    $(this).find("span").fadeIn('medium');
},
function() { $(this).find("span").hide();
});