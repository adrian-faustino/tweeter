/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

  const newPostContent = $(`<div>${obj.content.text}</div>`)
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
}

// ==> After document loads
$(document).ready(() => {
  loadTweets('/tweets');

  $('#submission-form').on('submit', (e) => {
    e.preventDefault();
    
    const tweetContent = $('#submission-form').serialize();

    $.post('/tweets', tweetContent)
      .then(() => {
        loadTweets('/tweets');
      });
  });
});

