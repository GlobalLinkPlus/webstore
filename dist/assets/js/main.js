$(document).ready(function () {
  const carouselEl = $('#hero-carousel');

  setTimeout(() => {
    const carousel = new bootstrap.Carousel(carouselEl, {
      interval: 1000,
      touch: true
    });

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 48) {
        $(".fixed-top").addClass("bg-white");
      } else {
        $(".fixed-top").removeClass("bg-white");
      }
    });
  }, 500);
});