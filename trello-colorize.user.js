// ==UserScript==
// @name       Trello card colorizer
// @namespace  https://github.com/askalee/trello-colorize
// @version    0.3
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @description  Changes background color of Trello cards to match only red/green labels
// @match      https://trello.com/b/*
// @copyright  2012+, Based on Deepak Giridharagopal's work
// ==/UserScript==

var colorize = function() {
    $(".list-card").css("background-color", "").css("border", "");
    // Story
    $(".list-card:has(.card-label-green)").css("background-color", "#bce89d");
    // Bug
    $(".list-card:has(.card-label-red)").css("background-color", "#ffbbbb");
};
$(document).ready(function() {
  colorize();
  setInterval(colorize, 10000);
});
