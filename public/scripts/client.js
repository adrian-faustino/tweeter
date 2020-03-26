/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// tweets parameter should be an array
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('.tweets-container')
      .prepend(createTweetElement(tweet));
  }
};

const createTweetElement = function(obj) {
  const newDiv = $('<article></article>')
    .addClass('post-container');
  
  const newAvatarContainer = $('<div></div>')
    .addClass('avatar-container')
    .append(`<img src="${obj.user.avatars}">`)
    .append(`<span class="username">${obj.user.name}</span>`);
  
  const newHeader = $('<header></header>')
    .addClass('post')
    .append(newAvatarContainer)
    .append(`<span class="userID">${obj.user.handle}</span>`);

  const newPostContent = $(`<div>${escape(obj.content.text)}</div>`)
    .addClass('post-content');

  const newFooter = $(`<footer>${obj.created_at}</footer>`)
    .addClass('tweet')

  return newDiv
    .append(newHeader)
    .append(newPostContent)
    .append(newFooter);
};

const loadTweets = function(server) {
  $.ajax(server, { method: 'GET' })
    .then((data) => {
      renderTweets(data);
    });
};

const overCharCount = function(num, str) {
  const maxChar = num;

  if (str.length > maxChar) {
    return true;
  }
  return false;
};

const errorAnimation = function(str) {
  $('.error-msg')
    .html(str)
    .removeClass('hidden')
    .toggleClass('shake')
    .addClass('reveal');
};

// ==> After document loads
$(document).ready(() => {
  loadTweets('/tweets');

  $('#submission-form').on('submit', (e) => {
    e.preventDefault();
    
    let userInput = $('#submission-form')
      .find('#tweet-text')
      .val();

    if (overCharCount(140, userInput)) {
      errorAnimation('⛔️Exceeding 140 character limit!');
    } else if (userInput === '') {
      errorAnimation(`⛔️Don't be shy. Enter a message!`);
    } else {
      const tweetContent = $('#submission-form').serialize();
      console.log('Tweet Content: ', tweetContent)

      $.post('/tweets', tweetContent)
      .then(() => {
        $.get('/tweets', (dataArr) => {
          renderTweets(dataArr.splice(dataArr.length - 1));
        });
        // loadTweets('/tweets');
      });

      $('.error-msg')
        .removeClass('reveal')
        .removeClass('shake')
        .addClass('hidden');
      $('#tweet-text').val('');
    }
  });
});