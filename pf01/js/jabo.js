$(function () {


    // $('.mopen').on('click', function () {
    //     $(this).toggleClass('on');
    //     $('.gnb').toggleClass('on');
    // });

    // $('.gnb').on('wheel touchmove', function (e) {
    //     e.preventDefault();
    // });


    // $(window).on('scroll', function () {
    //     let sct = $(window).scrollTop();
    //     if (sct > 0) {
    //         $('.header').addClass('on');
    //     } else {
    //         $('.header').removeClass('on');
    //     }
    // });


    $('.main_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,

        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            },


            {
                breakpoint: 380, //화면 사이즈 368px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            }
        ]
    });


    $('.slide_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.slide_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });



    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });





    $('.gnb .main_menu>.mob_bar_one>a').on('click', function () {
        $(this).toggleClass('on');
        $('.sub_one').toggleClass('on');

    });
    $('.gnb .main_menu>.mob_bar_two>a').on('click', function () {
        $(this).toggleClass('on');
        $('.sub_two').toggleClass('on');

    });
    $('.gnb .main_menu>.mob_bar_three>a').on('click', function () {
        $(this).toggleClass('on');
        $('.sub_three').toggleClass('on');

    });

    $('.gnb .main_menu>.mob_bar_four>a').on('click', function () {
        $(this).toggleClass('on');
        $('.sub_four').toggleClass('on');

    });
    $('.gnb .main_menu>.mob_bar_five>a').on('click', function () {
        $(this).toggleClass('on');
        $('.sub_five').toggleClass('on');

    });






    $('.gnb .main_menu>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    })
})