$(function () {

  $('.main_slide').slick({
    dots: true,
    arrows: false,

  });



  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
  })


  $('.tap_box .top_tap li').on('click', function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.tap_box .bottom_tap li').eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
  });


  $('.language').on('click', function () {
    $(this).toggleClass('on');
    $(this).next().toggleClass('on');
  })



  $('.fnt').each(function () {
    $(this).prop('fnt', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });


  $('.mobile_btn').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  });




  $('.gnb li>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {

      //서버메뉴가 없으면 바로 클릭되게 하기
      if ($(this).next().size() != 0) {
        e.preventDefault();
      }
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('.sub_menu').stop().slideUp();
    }
  });
  $(window).on('resize', function () {
    $('.gnb').removeAttr('style')
  })


})


