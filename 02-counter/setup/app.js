// Value to add to HTML
let counter = 0;

// HTML variables
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

// Add a listening event to each button
buttons.forEach(function (button) {
	button.addEventListener('click', function (event) {
		// Stores classes of the styles for later evaluation
		const styles = event.currentTarget.classList;

		// Conditions for evaluating the class and its functions
		if (styles.contains('decrease')) {
			counter--;
		} else if (styles.contains('increase')) {
			counter++;
		} else {
			counter = 0;
		}

		// Conditions for adding color to positive, negative and neutral quantities
		if (counter > 0) {
			value.style.color = '#00ff90';
		}
		if (counter < 0) {
			value.style.color = '#ff2345';
		}
		if (counter === 0) {
			value.style.color = '#102A42';
		}

		// Replace the value of the tag by the counter value
		value.textContent = counter;
	});
});
