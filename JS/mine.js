$(function() {
    // Nice Scroll
    $('body').niceScroll();
    // resize heder height:
    $('.heder').height($(window).height());

    // make header content in middle
    // first option

    // $('.intro-header-content').each(function() {
    //     middle_contrant = $(window).height() - $(this).height();
    //     $(this).css('paddingTop', middle_contrant / 2 - 100);
    // });

    // first option in CSS table cell
    // Scroll to top Features
    $('.heder .arrow i').click(function() {
        $('html, body').animate({
            scrollTop: $('.Feature').offset().top
        });
    });

    //show more button
    $('.our-work .show-more').click(function() {
        $('.our-work .hidden').fadeIn();
    });
    // Make testimonial slider
    var leftArrow = $('.testim .fa-arrow-circle-left');
    var rightArrow = $('.testim .fa-arrow-circle-right');
    var cFirst = $('.client:first');
    var cLast = $('.client:last');

    function checkClient() {
        if ($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    checkClient();

    $('.testim i').click(function() {
        if ($(this).hasClass('fa-arrow-circle-right')) {
            $('.testim .active').fadeOut(100, function() {
                $(this)
                    .removeClass('active')
                    .next('.client')
                    .addClass('active')
                    .fadeIn();
                checkClient();
            });
        } else {
            $('.testim .active').fadeOut(100, function() {
                $(this)
                    .removeClass('active')
                    .prev('.client')
                    .addClass('active')
                    .fadeIn();
                checkClient();
            });
        }
    });
});