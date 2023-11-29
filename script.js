function updateCountdown() {
    const targetDate = new Date('July 3, 2024 11:31:00 GMT-0700').getTime(); // Adjusted for PDT (GMT-0700)
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days + ' Days';
    document.getElementById('hours').innerText = hours + ' Hours';
    document.getElementById('minutes').innerText = minutes + ' Minutes';
    document.getElementById('seconds').innerText = seconds + ' Seconds';

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerText = 'Time is up!';
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initial call to update the countdown immediately
updateCountdown();
