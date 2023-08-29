$(function () {


    var $this = $(".section");
    var $this_s = $(".slide");
    $this.eq(0).addClass("on");

    $("#fullpage").fullpage({

        navigation: false,//네비게이션 유무
        navigationPosition: "right",//네비게이션 위치
        sectionsColor: [],//각 섹션 배경색, 배열의 형식
        anchors: ['intro', 'pf01', 'pf02', 'profile', 'introduce'],
        showActiveTooltip: true,//네비게이션 선택 메뉴 활성화

        css3: false,
        scrollOverflow: false, //line-height: 1에서 font-size가 box를 초과할 때 스크롤이 생기는 초기값을 false로 설정함.
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.

        afterRender: function () {
            $('.section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('nav li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }

        }


    });



    var length = $(".section4 .swiper-slide").length;
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: true,
        on: {
            slideChange: function () {
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
                if (this.activeIndex != 0 && idx != length) $.fn.fullpage.setAllowScrolling(false);
                if (length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
                // console.log('즉시 : ' + idx);
            },
            slideChangeTransitionEnd: function () {
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
                if (idx == 0 || idx >= length - 1) $.fn.fullpage.setAllowScrolling(true);
                // console.log('전환후 : ' + idx);     
            },
            touchMove: function (e) {
                var startY = e.touches.startY;
                setTimeout(function () {
                    if (startY > e.touches.currentY) swiper.slideNext();
                    else swiper.slidePrev();
                }, 100);
            },
        },
    });

})
