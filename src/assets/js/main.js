$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 48) {
      $(".fixed-top").addClass("bg-white");
    } else {
      $(".fixed-top").removeClass("bg-white");
    }
  });
});