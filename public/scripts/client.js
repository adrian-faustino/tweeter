/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      $('.tweets-container')
        .append(createTweetElement(tweet));
    }
  };

  const createTweetElement = function(obj) {
    const newDiv = $('<div></div>')
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

  renderTweets(data);
});