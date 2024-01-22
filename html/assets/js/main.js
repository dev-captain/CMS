$("#openMenu").on("click", function () {
  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});

$(document).ready(function () {
  $(".program_content").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".update_content").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".who_content").slick({
    dots: false,
    arrows: false,
    autoplay: false,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    variableWidth: true,
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    if (window.pageYOffset > 150) {
     $('.card_stick').css({
        opacity: 1
     })
    }
    else {
        $('.card_stick').css({
            opacity: 0
         })
    }
  });
});
