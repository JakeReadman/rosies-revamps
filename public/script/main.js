$(function () {
  $(document).scroll(function () {
    var $nav = $('#main-navbar');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() * 3);
    var $brand = $('#navbar-brand');
    $brand.toggleClass('visible', $(this).scrollTop() > $nav.height() * 3);
  });
});
