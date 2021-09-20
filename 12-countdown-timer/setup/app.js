// local data
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

// HTML variables
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// we obtain the current date format
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// time format peru
const utc = 5;

// we specify the day for the countdown
const futureDate = new Date(tempYear, tempMonth, tempDay + 4, 14 + utc, 46, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// get name month from array
let month = futureDate.getMonth();
month = months[month];

// get number date
const date = futureDate.getDate();

// get name day
const weekday = weekdays[futureDate.getDay()];

// insert in the html the date
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}.`;

// feat countdown
// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;
	// 1s = 1000ms
	// 1m = 60s
	// 1h = 60min
	// 1d = 24hr

	// values in ms
	const oneDay = 25 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	// calculate all values
	let days = t / oneDay;
	days = Math.floor(days);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);

	// set values array
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}

	items.forEach(function (item, index) {
		item.innerHTML = format(values[index]);
	});

	if (t < 0) {
		clearInterval(countdown);

		// message when time has expired
		deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
	}
}

// run countdown each 1s
let countdown = setInterval(getRemainingTime, 1000);

// run countdown
getRemainingTime();
