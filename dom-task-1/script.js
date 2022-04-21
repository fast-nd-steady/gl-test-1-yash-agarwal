var r = 255, g = 0, b = 0;
var button = document.getElementById('change-clr-btn');

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

button.onclick = () => {
    r = getRandomNumberBetween(0, 255);
    g = getRandomNumberBetween(0, 255);
    b = getRandomNumberBetween(0, 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}