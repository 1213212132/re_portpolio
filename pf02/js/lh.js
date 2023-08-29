$(function () {




    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });


    $('.main_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });


    $('.mainvisual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.mainvisual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });





    $('.notice_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });

    $('.img_box .arrows .left').on('click', function () {
        $('.notice_slide').slick('slickPrev');
    });
    $('.img_box .arrows .right').on('click', function () {
        $('.notice_slide').slick('slickNext');
    });



    $('.enter').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })


    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.re_gnb').toggleClass('on');
    });

    $('.re_gnb .mob_bar_one').on('click', function () {
        $(this).toggleClass('on');
        $('.click_one').toggleClass('on');

    });
    $('.re_gnb .mob_bar_two').on('click', function () {
        $(this).toggleClass('on');
        $('.click_two').toggleClass('on');

    });
    $('.re_gnb .mob_bar_three').on('click', function () {
        $(this).toggleClass('on');
        $('.click_three').toggleClass('on');

    });
    $('.re_gnb .mob_bar_four').on('click', function () {
        $(this).toggleClass('on');
        $('.click_four').toggleClass('on');

    });

    $('.re_gnb .mob_bar_five').on('click', function () {
        $(this).toggleClass('on');
        $('.click_five').toggleClass('on');

    });

    $('.re_gnb .mob_bar_six').on('click', function () {
        $(this).toggleClass('on');
        $('.click_six').toggleClass('on');

    });

    $('.re_gnb .mob_bar_seven').on('click', function () {
        $(this).toggleClass('on');
        $('.click_seven').toggleClass('on');

    });


    $('.re_gnb ul>li>a').on('click', function (e) {
        if ($('.re_gnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.snb').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.re_gnb').removeClass('on')
    });

    $('.re_gnb').on('wheel', function (e) {
        if ($('.re_gnb').hasClass('on')) {
            e.preventDefault();
        }
    })


    $('.top_enter').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    })




})