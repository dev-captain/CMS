!(function ($) {
  "use strict";

  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  console.log(window.innerWidth);
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 200);
    return false;
  });

  // Toggle .header-scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  const burgerMenu = document.getElementById("hamburger");
  const navbarMenu = document.getElementById("menu");
  const html = document.getElementById("root");
  const closeBtn = document.getElementById("closeBtn");

  // Show and Hide Navbar Menu
  burgerMenu.addEventListener("click", () => {
    navbarMenu.classList.add("active");
    burgerMenu.classList.add("active");
    html.classList.add("scroll-prevent");
  });

  // Show and Hide Navbar Menu
  closeBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    burgerMenu.classList.remove("active");
    html.classList.remove("scroll-prevent");
  });

  $('.mv_slides').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fade: true,
  });

  let el = document.getElementsByClassName('circle_type');

  for (let i = 0; i < el.length; i++) {
    const circleType = new CircleType(el[i]);
    circleType.radius(80);
  }

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        // panel.style.minHeight = 0 + "px";
        panel.style.marginBottom = 0 + "px";

      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.marginBottom = 55 + "px";
        // panel.style.minHeight = 85 + "px";
        if (window.innerWidth < 768) {
          // panel.style.minHeight = 0 + "px";
          panel.style.marginBottom = 25 + "px";
        }
      }
    });
  }

})(jQuery);


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