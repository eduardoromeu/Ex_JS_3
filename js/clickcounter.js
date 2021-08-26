const starImg = document.getElementById("starImg");
const clickscount = document.getElementById("clickscount");
const background = document.getElementsByClassName("background")[0];

let doingAnim = false;
let clicks = 0;
let clicksCent = 0;
let starSize = 1;

function StarClick() {
    if(doingAnim == true) return;

    clicks++;
    clicksCent++;

    if(clicksCent >= 100){
        clicksCent = 0;
        NewStar();
    }

    starSize += 0.1;
    starImg.style.transform = `scale(${starSize})`;

    SetText(clickscount, clicks);
}

function NewStar() {
    doingAnim = true;

    starSize *= 2;
    starImg.style.transform = `scale(${starSize})`;
    starImg.style.opacity = "0%";

    window.setTimeout(() => {
        starSize = 1;
        starImg.style.transition = "none";
        starImg.style.transform = `scale(${starSize})`;

        window.setTimeout(() => {
            starImg.style.transition = "1s all";
            starImg.style.opacity = "100%";
        }, 10);
    }, 1000);

    window.setTimeout(() => doingAnim = false, 1800);
}