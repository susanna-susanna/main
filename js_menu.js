$('.menu-button').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-button_active');
  $('.header-menu').toggleClass('header-menu_active');
});