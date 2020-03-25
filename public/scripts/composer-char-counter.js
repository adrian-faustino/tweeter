$(document).ready(() => {
  $('#tweet-text').on('keydown', (e) => {
    // clear error message
    $('.error-msg')
      .removeClass('reveal')
      .removeClass('shake')
      .addClass('hidden');
  });

  $('#tweet-text').on('keyup', (e) => {
    let charCount = 140;
    let currentInputCount = $('#tweet-text').val().length;

    charCount -= currentInputCount;
    $('.counter').html(charCount);

    if (charCount < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'rgba(214, 207, 207, 0.87)');
    }
  });
});