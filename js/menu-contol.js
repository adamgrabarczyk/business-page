$(function () {
    var scrollOffset;

    if ($(window).width() < 768) {
        scrollOffset = 88;
    } else {
        scrollOffset = 108;
    }

    $(".about-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - scrollOffset
        }, 1500);
    });

    $(".offer-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#offer").offset().top - scrollOffset
        }, 1500);
    });

    $(".skills-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top - scrollOffset
        }, 1500);
    });

    $(".footer-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top - scrollOffset
        }, 1500);
    });
});