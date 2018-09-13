$(document).ready(function () {
    scrollEffect();
    transformHead();
    mobileMenu();
    sliderEffect();
    heightNav();
    $(window).scroll(function () {
        scrollEffect();
    });
});


function mobileMenu() {
    $('.menu-toogle').click(function () {
        $('#main-nav ul').toggleClass('site-nav-open', 5000);
        $(this).toggleClass('open');
    })
      $('#main-nav ul li a').click(function () {
        $('#main-nav ul').removeClass('site-nav-open', 5000);
        $('.menu-toogle').removeClass('open');
    })
}

function heightNav() {
    var navHeight = $('#main-nav').outerHeight();

    $('.section-style').css('padding-top', navHeight * 1.5);
    $('.section-style').css('padding-bottom', navHeight * 1.5);
    $('.section-style').css('padding-left', navHeight);
    $('.section-style').css('padding-right', navHeight);
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
    if (actualPos > headerHeight + (aboutHeight * 0.35)) {
        $('#tariff .tariff-flex p').addClass('scrolled');
    } else {
        $('#tariff .tariff-flex p').removeClass('scrolled');
    }
}

function transformHead() {
    $('#main-head h2').css({
        'transform': 'translateX(0)',
    })
}

function sliderEffect() {

    $('.next').on('click', function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        var classPic = $('.slider-inner img:last-child').attr('class');

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
        if (classPic == 'active') {
            $('.next').css('opacity', '0');
        }
    });

    $('.prev').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        var classPic = $('.slider-inner img:last-child').attr('class');

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
        if (classPic == 'active') {
            $('.next').css('opacity', '1');
        }
    });
}
