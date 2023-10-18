$(document).ready(function () {
  var header = $("#header");
  var headerHeight = header.outerHeight();
  var scrollClassAdded = false;

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight && !scrollClassAdded) {
      header.addClass("scrolled");
      scrollClassAdded = true;
    } else if ($(this).scrollTop() <= headerHeight && scrollClassAdded) {
      header.removeClass("scrolled");
      scrollClassAdded = false;
    }
  });
});
