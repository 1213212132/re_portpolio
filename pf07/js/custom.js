$(function () {
    $('.main_slide').slick({
        arrows: false,
        dots: true,
        vertical: true
    });

    $('.mopen').on('click', function () {
        $('#gnb').toggleClass('on')
    })

    $('.aside_gnb li').on('click', function () {
        e.preventDefault();
        let idx = $(this).index();
        $('.aside_gnb li').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    })


});

