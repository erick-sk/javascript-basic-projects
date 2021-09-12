// Array to store colors
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

// HTML variables
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Listening for a "click" on the btn variable
btn.addEventListener('click', function () {
	// Get random number between 0 - 3
	const randomNumber = getRandomNumber();

	// Changing the styles with the randomly obtained color
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

// Function that generates a random number by the size of array => colors[]
function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
