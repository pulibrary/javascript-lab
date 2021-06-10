const body = document.getElementsByTagName("body")[0];
const colors = ["red", "orange", "yellow", "green", "blue", "purple"]
let currentIndex = 0;

/* Change Background Color to Red */
setInterval(() => {
    body.style.backgroundColor = colors[currentIndex];
    if (!colors[currentIndex]) {
        currentIndex = 0;
    } else currentIndex++;
}, 2000)