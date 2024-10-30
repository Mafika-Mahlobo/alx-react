import $ from "jquery";
import _ from 'lodash';


$(document).ready(function() {
    $('<p>').text('Holberton Dashboard').appendTo('body');
    $('<p>').text('Dashboard data for the students').appendTo('body');
    $('<button>').text('Click here to get started').appendTo('body');
    $('<p id="count"></p>').appendTo('body');
    $('<p>').text('Copyright - Holberton School').appendTo('body');
  });

const updateCounter = _.debounce(() => {
	count++
	$('#count').text(`${count} clicks on the button`);
}, 500);


$(document).ready(function() {
    const $button = $('<button>').text('Click here to get started').appendTo('body');
  
    $('<p id="count"></p>').appendTo('body');
  
   // $button.on('click', _.debounce(updateCounter, 300));
});
