$(document).ready(() => {
  $('.post-container').on('mouseenter', (e) => {
    e.target.$('.userID').toggleClass('reveal');
  });

  $('.post-container').on('mouseleave', (e) => {
    e.target.$('.userID').toggleClass('reveal');
  });
});