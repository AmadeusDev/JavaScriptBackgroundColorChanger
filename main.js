const body = document.getElementsByTagName('body')[0];
const info = document.getElementById('info');
const button = document.getElementById('button');

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const change = () => {
    const r = randomNumber(0, 255);
    const g = randomNumber(0, 255);
    const b = randomNumber(0, 255);
    info.innerText = `RGB COLOR: (${r}, ${g}, ${b})`;
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

button.onclick = change;
change();