import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function incrementt() {
	count += 1;
	return count;
}

$(function() {
	$('body').append('<p>Holberton Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');
	$('body').append('<button id="myButton">Click here to get started</button>');
	$('body').append('<p id="count"></p>');
	$('body').append('<p>Copyright - Holberton School</p>');
     updateCounter();
});


function updateCounter() {
    let debouncedUpdateCounter = _.debounce(() => {
		let count = incrementt();
		$('#count').text(`${count} clicks on the button`);
	});
	$('button').on('click', debouncedUpdateCounter);
};
