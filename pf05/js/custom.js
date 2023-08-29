$(function () {

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        }
        else {
            $('.header').removeClass('on')
        }
    });



    $('.ham_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.lnb').toggleClass('on');
    })






    $('.tap_box .top').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tap_on .bottom').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    // document.querySelector('.MainItm .arrows .left').addEventListener('click', () => {
    //     ItmSlide.slidePrev();
    // });

    $('.news_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
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
    $('.tv_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
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
    $('.social_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
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


    $('.arrows01 .left').on('click', function () {
        $('.news_slide').slick('slickPrev');
    });
    $('.arrows01 .right').on('click', function () {
        $('.news_slide').slick('slickNext');
    });


    $('.arrows01 .left').on('click', function () {
        $('.tv_slide').slick('slickPrev');
    });
    $('.arrows01 .right').on('click', function () {
        $('.tv_slide').slick('slickNext');
    });


    $('.arrows01 .left').on('click', function () {
        $('.social_slide').slick('slickPrev');
    });
    $('.arrows01 .right').on('click', function () {
        $('.social_slide').slick('slickNext');
    });




    $('.arrows .left').on('click', function () {
        $('.movie_slide').slick('slickPrev');
    });
    $('.arrows .right').on('click', function () {
        $('.movie_slide').slick('slickNext');
    });



    $('.movie_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

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





    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');
    });

    $('.lnb li>a').on('click', function (e) {
        if ($('.lnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.lnb>ul>li .snb').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.lnb').removeClass('on')
    });

    $('.lnb').on('wheel', function (e) {
        if ($('.lnb').hasClass('on')) {
            e.preventDefault();
        }
    })






})