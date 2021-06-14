const body = document.getElementsByTagName("body")[0];
const colors = ["red", "orange", "yellow", "green", "blue", "purple"]
let currentIndex = 0;

/* Changes background color of body every 2s */
setInterval(() => {
    body.style.backgroundColor = colors[currentIndex];
    if (!colors[currentIndex]) {
        currentIndex = 0;
    } else currentIndex++;
}, 3000);