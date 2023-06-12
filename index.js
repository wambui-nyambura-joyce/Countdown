// Set the target countdown date and time
const targetDate = new Date("2023-06-30T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time in milliseconds
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML =
        "Time remaining: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Check if the countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Countdown expired";
    }
}, 1000);