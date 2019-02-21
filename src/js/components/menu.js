var defaultSrc = $('.header__logo').find('.js-mob-logo').attr('src');
var menuSrc = $('.header__logo').find('.js-mob-logo').data('src');
function menu(burger) {
  if ($(burger).hasClass('is-active')) {
    $(burger).removeClass('is-active');
    $('.js-menu').removeClass('is-open');
    $('.header__content').removeClass('menu-open');
    $('.out').removeClass('is-hidden');
    $('.header__logo').find('.js-mob-logo').attr('src', defaultSrc);
  } else {
    $(burger).addClass('is-active');
    $('.js-menu').addClass('is-open');
    $('.header__content').addClass('menu-open');
    $('.out').addClass('is-hidden');
    $('.header__logo').find('.js-mob-logo').attr('src', menuSrc);
  }
}
$('.js-burger').on('click', function() {
  menu(this);
});


$('.js-menu-link').on('click', function(e) {
  e.preventDefault();
  $('html, body').stop().animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 600);
  menu('.js-burger');
});
