const outputCounter = document.getElementById("clicker__counter");
const outputSpeed = document.getElementById("click__speed");
const cookie = document.getElementById("cookie");

let counter = Number(outputCounter.textContent);
let speed = Number(outputSpeed.textContent);
let lastTime = Date.now();
cookie.onclick = () => {
    const timeDelta = (Date.now() - lastTime) / 1000;
    counter++;
    outputCounter.textContent = counter;
    if (counter % 2 > 0) {
        cookie.width += 20;
        cookie.height += 20;
    }
    else {
        cookie.width -= 20;
        cookie.height -= 20;
    }
    outputSpeed.textContent = (1 / timeDelta).toFixed(2);
    lastTime = Date.now();
}