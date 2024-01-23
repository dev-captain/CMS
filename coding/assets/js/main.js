new WOW().init();

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 10) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});


// // Show and Hide Navbar Menu
$(".nav-btn").click(function(){
  $('.menu-nav').toggleClass('active')
  $(this).toggleClass('active')
});
$(".nav-link").click(function() {
  $('.menu-nav').removeClass('active')
  $('.nav-btn').removeClass('active')
})
$(".to_top").click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
});

jQuery(function() {
  jQuery('a[href^="#"]').click(function() {
      var e = jQuery(this).attr("href")
        , t = jQuery("#" == e || "" == e ? "html" : e).offset().top;
        console.log(window.innerWidth);
        if(window.innerWidth>768) {
          return jQuery("body,html").animate({
              scrollTop: t + 10
          }, 700, "swing"),
          !1
        }
      return jQuery("body,html").animate({
          scrollTop: t
      }, 700, "swing"),
      !1
  })
})
$(document).ready(function () {
  $("#fv-slick").slick({
    autoplay: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
  });
  $("#video-slick").slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 1,
  });
  $("#course-slick").slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 1,
  });

  $(".course-slick").slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 1,
  });
  $(".gallery-container").slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
  });
 

});

(function ($) {

  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
  $('.modal_open').click(function () {

      // 黒い背景をbody内に追加
      $('body').append('<div class="modal_bg"></div>');
      $('.modal_bg').fadeIn();

      // data-targetの内容をIDにしてmodalに代入
      var modal = '#' + $(this).attr('data-target');

      // modalをフェードインで表示
      $(modal).fadeIn();
      $('html').addClass('scroll-prevent');

      // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.modal_bg, .modal_close').off().click(function () {
          $('.modal_box').fadeOut();
          $('.modal_bg').fadeOut('slow', function () {
              $('.modal_bg').remove();
              $('html').removeClass('scroll-prevent');
          });
      });

      // .modal_switchを押すとモーダルを切り替える
      $('.modal_switch').click(function () {

          // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
          $(this).parents('.modal_box').fadeOut();

          // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
          var modal = '#' + $(this).attr('data-target');

          $(modal).fadeIn();

      });
  });
})(jQuery);

