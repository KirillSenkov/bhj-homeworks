function getHole( index ) {
    return document.getElementById("hole" + index);
}

const outputDead = document.getElementById("dead");
const outputLost = document.getElementById("lost");

let on = 0;
let off = 0;

for (i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            on++;
        }
        else {
            off++;   
        }
        if (on > 9) {
            outputDead.textContent = on;
            alert("Слегка победил.");
            on = 0;
            off = 0;
        }
        else if (off > 4) {
            outputLost.textContent = off;
            alert("Немного проиграл.");
            on = 0;
            off = 0;
        }
        outputLost.textContent = off;
        outputDead.textContent = on;
    }
}
