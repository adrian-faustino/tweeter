$(document).ready(() => {
  $('.v-container').hover(() => {
    $('.v.v1')
      .addClass('open');
    $('.v.v2')
      .addClass('open');
  }, () => {
    $('.v.v1')
      .removeClass('open');
    $('.v.v2')
      .removeClass('open');
  });

  // focus the text field after jump
  $('.v-container').on('click', () => {
    window.scroll({
      top: 0,
      left: 0,
    });
    
    setTimeout(() => {
      $('#tweet-text').focus();
    },0);
  });
});