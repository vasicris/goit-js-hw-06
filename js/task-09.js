function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.body;

function updateColor() {
const newColor = getRandomHexColor();
body.style.backgroundColor = newColor;
color.textContent = newColor;
}

changeColor.addEventListener('click', updateColor);