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


    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: {
            delay: 14000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });


    var swiper = new Swiper(".mySwiper", {
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        slidesPerView: 3,
        breakpoints: {
            // 화면의 넓이가 320px 이상일 때
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // 화면의 넓이가 640px 이상일 때
            640: {
                slidesPerView: 3,

            }
        }
    });






    $('.ham_btn_mo').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    })

    $('.gnb ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.snb').stop().slideUp();
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


    /*sub_01*/

    $('.tap_box .top').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tap_on .bottom').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });




})