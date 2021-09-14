// HTML variables
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

// open modal
modalBtn.addEventListener('click', () =>
	modalOverlay.classList.add('open-modal')
);

// close modal
closeBtn.addEventListener('click', () =>
	modalOverlay.classList.remove('open-modal')
);
