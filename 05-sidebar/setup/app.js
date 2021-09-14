// HTML variables
const aside = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

// show sidebar toggleBtn
toggleBtn.addEventListener('click', () =>
	aside.classList.toggle('show-sidebar')
);

// show sidebar closeBtn
closeBtn.addEventListener('click', () => {
	aside.classList.toggle('show-sidebar');
});
