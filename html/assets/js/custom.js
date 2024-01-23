new WOW().init();
$(window).load(function () {
  $(".wrap").addClass("loaded");
  setTimeout(function () {
    $(".wrap").addClass("finish");
  }, 4500);
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 10) {
    $("header").addClass("active");
    $(".head").addClass("active");
    $("#hamburger").addClass("scroll");
  } else {
    $("header").removeClass("active");
    $(".head").removeClass("active");
    $("#hamburger").removeClass("scroll");
  }
});

const burgerMenu = document.getElementById("hamburger");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});


// document.addEventListener("DOMContentLoaded", () => {
//   if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
//     const body = document.body;
//     const stalker = document.createElement("div");
//     const btns = document.querySelectorAll("a");
//     const STALKER_SIZE = 10;
//     const STALHER_COLOR = "rgb(23, 27, 97,.8)";
//     const SCALE_SIZE = 3;
//     const SCALE_DURATION = 0.3;

//     ({
//       init() {
//         const self = this;
//         stalker.id = "js-stalker";
//         stalker.className = "stalker";
//         stalker.style.width = STALKER_SIZE + "px";
//         stalker.style.height = STALKER_SIZE + "px";
//         stalker.style.backgroundColor = STALHER_COLOR;
//         body.appendChild(stalker);
//         body.addEventListener("mousemove", self.onMouseMove);
//         for (let i = 0; i < btns.length; i++) {
//           btns[i].addEventListener("mouseenter", self.onMouseEnter);
//           btns[i].addEventListener("mouseleave", self.onMouseLeave);
//         }
//       },
//       onMouseMove(e) {
//         stalker.style.backgroundColor = STALHER_COLOR;

//         TweenMax.to(stalker, 0.4, {
//           x: e.clientX - STALKER_SIZE / 2,
//           y: e.clientY - STALKER_SIZE / 2,
//         });
//       },
//       onMouseEnter() {
//         stalker.style.backgroundColor = STALHER_COLOR;
//         TweenMax.to(stalker, SCALE_DURATION, {
//           scale: SCALE_SIZE,
//         });
//       },
//       onMouseLeave() {
//         stalker.style.backgroundColor = STALHER_COLOR;
//         TweenMax.to(stalker, SCALE_DURATION, {
//           scale: 1,
//         });
//       },
//     }.init());
//   }
// });


$(document).ready(function () {
  $(".img-slick").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  });
});