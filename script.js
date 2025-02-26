document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        const eventDate = new Date("2025-12-07T00:00:00").getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference < 0) {
            document.getElementById("countdown-timer").innerHTML = "<p>¡El gran día ha llegado! 🎉</p>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
