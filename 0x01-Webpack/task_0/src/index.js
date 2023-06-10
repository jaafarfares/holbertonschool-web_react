import $ from 'jquery';

$(document).ready(() => {
  const paragraphs = ['Holberton Dashboard', 'Dashboard data for the students', 'Copyright - Holberton School'];

  paragraphs.forEach((text) => {
    $('<p>').text(text).appendTo('body');
  });
});
