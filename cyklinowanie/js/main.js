$(document).ready(function () {
    scrollEffect();
    transformHead();
    mobileMenu();
});
$(window).scroll(function () {
    scrollEffect();
});

function mobileMenu() {
    $('.menu-toogle').click(function () {
        $('#main-nav ul').toggleClass('site-nav-open', 5000);
        $(this).toggleClass('open');
    })
}

function scrollEffect() {

    var actualPos = $(window).scrollTop();
    var navHeight = $('#main-nav').outerHeight();
    var headerHeight = $('#main-head').outerHeight();
    var aboutHeight = $('#about').outerHeight();

    if (actualPos > navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
    if (actualPos > headerHeight * 0.5) {
        $('.container-content').addClass('scrolled');
    } else {
        $('.container-content').removeClass('scrolled');
    }
    if (actualPos > headerHeight + (aboutHeight * 0.5)) {
        $('#tariff .tariff-content p').addClass('scrolled');
        $('#tariff .tariff-content p:last-child').removeClass('scrolled');
    } else {
        $('#tariff .tariff-content p').removeClass('scrolled');
    }
}

function transformHead() {
    $('#main-head h2').css({
        'transform': 'translateX(0)',
    })
}
