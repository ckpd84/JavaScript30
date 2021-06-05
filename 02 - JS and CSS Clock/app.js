const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const secondsNumber = document.querySelector(".seconds");
const minutesNumber = document.querySelector(".minutes");
const hoursNumber = document.querySelector(".hours");
function setDate() {
	const now = new Date();

	/* Seconds */
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (seconds < 10) {
		secondsNumber.innerHTML = "0" + seconds;
	} else {
		secondsNumber.innerHTML = seconds;
	}

	/* Minutes */
	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60) * 360 + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	if (minutes < 10) {
		minutesNumber.innerHTML = "0" + minutes + " :";
	} else {
		minutesNumber.innerHTML = minutes + " :";
	}

	/* Hours */
	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	hoursNumber.innerHTML = hours + " :";
}
setInterval(setDate, 1000);

setDate();
