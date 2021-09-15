// Using selectors inside the element

// HTML tags
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
	// button plus tag
	const btn = question.querySelector('.question-btn');

	// listening click, add and filter class
	btn.addEventListener('click', function () {
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
});

// Traversing the dom

// HTML tags
// const btns = document.querySelectorAll('.question-btn');

// listening for click on each btn
// btns.forEach(function (btn) {
// 	btn.addEventListener('click', (e) => {
// 		//accessing the parent node
// 		const question = e.currentTarget.parentElement.parentElement;

// 		// show and hide text
// 		question.classList.toggle('show-text');
// 	});
// });
