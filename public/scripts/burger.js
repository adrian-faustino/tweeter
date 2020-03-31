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

  // hide or show the submission form
  $('.v-container').on('click', () => {
    const rotation = $('.new-tweet').css('--rotation');
    if (rotation.split('').includes('9')) {
      $('.new-tweet')
        .css('--rotation', '0deg')
        .css('position', 'relative');
    } else {
      setTimeout(() => {
        $('.new-tweet')
          .css('position', 'absolute');
      }, 1000);
      $('.new-tweet')
        .css('--rotation', '90deg');
    }

    // focus the text field after jump
    window.scroll({
      top: 0,
      left: 0,
    });
    
    setTimeout(() => {
      $('#tweet-text').focus();
    },0);
  });
});