let counter = 5;

const countdownElement = document.getElementById('counter');

const countdownInterval = setInterval(() => {
    counter--;
    countdownElement.textContent = counter;

    if (counter === 0) {
        clearInterval(countdownInterval);
        window.location.href = "index.html";
    }
}, 1000);