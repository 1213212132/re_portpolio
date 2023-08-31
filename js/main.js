$(function () {



    const COVER_BTN = document.querySelector('.util');
    const COVER = document.querySelector('.cover');
    const COVER_A = document.querySelectorAll('.cover>ul a');


    COVER_BTN.addEventListener('click', function (e) {
        e.currentTarget.classList.toggle('on');
        //this.classList.toggle('on');
        COVER.classList.toggle('on');
    });

    COVER_A.forEach((lnk, idx) => {
        lnk.addEventListener('click', () => {
            COVER.classList.remove('on');
            COVER_BTN.classList.remove('on');
            console.log(idx);
        });
    });


    var $this = $(".section");
    var $this_s = $(".slide");
    $this.eq(0).addClass("on");
    $('#fullpage').fullpage({

        anchors: ['intro1', 'intro2', 'intro3', 'portfolio', 'introduce', 'about'],

        scrollingSpeed: 1000,
        // scrollBar: true,
        onLeave: function (origin, destination, direction) {

            // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
            $('#fullpage').on('scroll touchmove mousewheel', function (event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
            swiper.mousewheel.disable();
        },

        onLeave: function (idx, nidx, dir) {
            $('nav li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }

        },
        afterLoad: function (anchorLink, index) {
            // 전환이 끝난후 이벤트풀기                               
            $('#fullpage').off('scroll mousewheel');
            if (!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); // 모바일분기
            if (swiper) swiper.mousewheel.enable();
            if (!$(".sec2").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
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

/*마우스 커서에 따라 물방울 생기는 이벤트*/

// <![CDATA[
var colours = new Array("#83afe9", "#83afe9", "#83afe9", "#83afe9", "#83afe9"); // colours for top, right, bottom and left borders and background of bubbles
var bubbles = 100; // maximum number of bubbles on screen
var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var bubb = new Array();
var bubbx = new Array();
var bubby = new Array();
var bubbs = new Array();
window.onload = function () {
    if (document.getElementById) {
        var rats, div;
        for (var i = 0; i < bubbles; i++) {
            rats = createDiv("3px", "3px");
            rats.style.visibility = "hidden";
            div = createDiv("auto", "auto");
            rats.appendChild(div);
            div = div.style;
            div.top = "1px";
            div.left = "0px";
            div.bottom = "1px";
            div.right = "0px";
            div.borderLeft = "1px solid " + colours[3];
            div.borderRight = "1px solid " + colours[1];
            div = createDiv("auto", "auto");
            rats.appendChild(div);
            div = div.style;
            div.top = "0px";
            div.left = "1px";
            div.right = "1px";
            div.bottom = "0px"
            div.borderTop = "1px solid " + colours[0];
            div.borderBottom = "1px solid " + colours[2];
            div = createDiv("auto", "auto");
            rats.appendChild(div);
            div = div.style;
            div.left = "1px";
            div.right = "1px";
            div.bottom = "1px";
            div.top = "1px";
            div.backgroundColor = colours[4];
            div.opacity = 0.5;
            if (document.all) div.filter = "alpha(opacity=50)";
            document.body.appendChild(rats);
            bubb[i] = rats.style;
        }
        set_scroll();
        set_width();
        bubble();
    }
}
function bubble() {
    var c;
    if (x != ox || y != oy) {
        ox = x;
        oy = y;
        for (c = 0; c < bubbles; c++) if (!bubby[c]) {
            bubb[c].left = (bubbx[c] = x) + "px";
            bubb[c].top = (bubby[c] = y) + "px";
            bubb[c].width = "5px";
            bubb[c].height = "5px";
            bubb[c].visibility = "visible";
            bubbs[c] = 3;
            break;
        }
    }
    for (c = 0; c < bubbles; c++) if (bubby[c]) update_bubb(c);
    setTimeout("bubble()", 40);
}
function update_bubb(i) {
    if (bubby[i]) {
        bubby[i] -= bubbs[i] / 2 + i % 2;
        bubbx[i] += (i % 5 - 2) / 5;
        if (bubby[i] > sdown && bubbx[i] > 0) {
            if (Math.random() < bubbs[i] / shigh * 2 && bubbs[i]++ < 8) {
                bubb[i].width = bubbs[i] + "px";
                bubb[i].height = bubbs[i] + "px";
            }
            bubb[i].top = bubby[i] + "px";
            bubb[i].left = bubbx[i] + "px";
        }
        else {
            bubb[i].visibility = "hidden";
            bubby[i] = 0;
            return;
        }
    }
}
document.onmousemove = mouse;
function mouse(e) {
    set_scroll();
    y = (e) ? e.pageY : event.y + sleft;
    x = (e) ? e.pageX : event.x + sdown;
}
window.onresize = set_width;
function set_width() {
    if (document.documentElement && document.documentElement.clientWidth) {
        swide = document.documentElement.clientWidth;
        shigh = document.documentElement.clientHeight;
    }
    else if (typeof (self.innerHeight) == "number") {
        swide = self.innerWidth;
        shigh = self.innerHeight;
    }
    else if (document.body.clientWidth) {
        swide = document.body.clientWidth;
        shigh = document.body.clientHeight;
    }
    else {
        swide = 800;
        shigh = 600;
    }
}
window.onscroll = set_scroll;
function set_scroll() {
    if (typeof (self.pageYOffset) == "number") {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
    }
    else if (document.body.scrollTop || document.body.scrollLeft) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
    }
    else {
        sdown = 0;
        sleft = 0;
    }
}
function createDiv(height, width) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height;
    div.style.width = width;
    div.style.overflow = "hidden";
    return (div);
}
    // ]]>




