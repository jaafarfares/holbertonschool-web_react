import $ from 'jquery';

$(function(count) {
	$('body').append('<p>Holberton Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');
	$('body').append('<button id="myButton">Click here to get started</button>');
	$('body').append('<p id="count"></p>');
	$('body').append('<p>Copyright - Holberton School</p>');
    updateCounter();
});


function updateCounter(count) {
    var count = 0;
    var button = document.getElementById("myButton");
    var countDisplay = document.getElementById("count");

    button.addEventListener("click", function increment() {
       count++;
       countDisplay.innerHTML = `${count} clicks on the button`;
    });

    const debouncedUpdateCounter = debounce(increment, 500);
    button.addEventListener("click", debouncedUpdateCounter);
  };
