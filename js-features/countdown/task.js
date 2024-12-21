function intervalFormat(interval) {
    const hours = String(Math.floor(interval / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((interval % 3600) / 60)).padStart(2, "0");
    const seconds = String(interval % 60).padStart(2, "0");
    return hours + ":" + minutes + ":" + seconds;
};

const timer = document.getElementById("timer");
let coundown = Number(timer.textContent);
const intervalId = setInterval(() => {
    coundown--;
    if (coundown < 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
        timer.textContent = "конкурс завершен";
        return;
    }
    timer.textContent = intervalFormat(coundown);
}, 1000);
