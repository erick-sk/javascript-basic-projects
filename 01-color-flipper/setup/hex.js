// Array to generate hexadecimal code
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// HTML variables
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Listening for a "click" on the btn variable
btn.addEventListener('click', function () {
	// Array to store the hexadecimal code
	let hexColor = '#';

	// Loop for generate 6 random numbers and concatenate them
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()];
	}

	// Changing the styles with the generated code
	color.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});

// Function that generates a random number by the size of array => hex[]
function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}
