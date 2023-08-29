$(function () {


    $('.hd_ham_btn').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })


    $('.main_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        loop: true,
        // autoplay: true,
        // autoplaySpeed: 2000,

        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.hd_ham_btn').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })



    $('.sec_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });


    $('.section02 .arrows .left').on('click', function () {
        $('.sec_slide').slick('slickPrev');
    });
    $('.section02 .arrows .right').on('click', function () {
        $('.sec_slide').slick('slickNext');
    });


    $('.ham_btn').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })


    $('.pause').click(function () {
        $('.sec_slide').slick('slickPause');
    });

    $('.play').click(function () {
        $('.sec_slide').slick('slickPlay');
    });





    $('.pause').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })

    $('.arrows .pause').click(function () {
        $('.sec_slide').slick('slickPause');
    });


    $('.tap_box .top').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tap_on .bottom').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });


    $('.ham_btn_mo').on('click', function () {
        $(this).toggleClass('on');
        $('.re_gnb').toggleClass('on');
    })

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



})