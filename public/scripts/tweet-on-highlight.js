$(document).ready(() => {
  // $('.post-container').hover(() => {
  //   $('.userID').addClass('reveal');
  // }, () => { 
  //   $('.userID').removeClass('reveal');
  // });

  $('.post-container').hover(() => {
    $(this.element).addClass('hello');
    console.log($(this.element));
  }, () => {
    $(this.element).removeClass('hello');
    console.log($(this.element));
  });
});