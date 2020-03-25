$(document).ready(() => {
  $('.post-container').on('mouseenter', () => {
    $('.userID').toggleClass('reveal');
  });

  $('.post-container').on('mouseleave', () => {
    $('.userID').toggleClass('reveal');
  });
});