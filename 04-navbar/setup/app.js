// HTML variables
const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');

// listening for one click on navToggle
navToggle.addEventListener('click', showLinks);

// Function displaying links
function showLinks() {
	// Example based on conditions
	// if (!links.classList.contains('show-links')) {
	// 	links.classList.add('show-links');
	// } else {
	// 	links.classList.remove('show-links');
	// }

	// .toggle
	links.classList.toggle('show-links');
}
