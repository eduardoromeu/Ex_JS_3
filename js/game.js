const numInput = document.getElementById("numInput");
const confHighNum = document.getElementById("confHighNum");
const confLowNum = document.getElementById("confLowNum");
const spinBtn = document.getElementById("spinBtn");
const resNum = document.getElementsByClassName("resNum")[0];
const resTxt = document.getElementsByClassName("resTxt")[0];
const resTotal = document.getElementsByClassName("resTotal")[0];
const wheelImg = document.getElementsByClassName("wheel-img")[0];
const homeBtn = document.getElementsByClassName("hidden")[0];
let totalHits = 0;
let resString;

function Spin() {
    let maxNum = AssignInput(confHighNum);
    let minNum = AssignInput(confLowNum);
    const usrNum = AssignInput(numInput);

    const rnd = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    if(localStorage.getItem(`totalHits${minNum}${maxNum}`) !== null)
        totalHits = localStorage.getItem(`totalHits${minNum}${maxNum}`); else totalHits = 0;

    if(usrNum == rnd) {
        resString = `Você acertou!`;
        totalHits++;
    } else { resString = `Você errou!` }

    spinBtn.disabled = true;
    wheelImg.style.transition = '2s all';
    wheelImg.style.transform = 'rotate(1440deg)';

    let doAnim = window.setInterval(() => {
        wheelImg.style.transition = '0s all';
        wheelImg.style.transform = 'rotate(0deg)';
        spinBtn.disabled = false;
        SetText(resTxt, resString);
        SetText(resNum, rnd);
        SetText(resTotal, `Total de Acertos: ${totalHits}`);
        Show(homeBtn);
        localStorage.setItem(`totalHits${minNum}${maxNum}`, totalHits);
        clearInterval(doAnim);
    }, 2500);
}

function ResetConf() {
    FillInput(confHighNum, 100);
    FillInput(confLowNum, 0);
    let doAnim = window.setInterval(() => {
        wheelImg.style.transition = '0s all';
        wheelImg.style.transform = 'rotate(0deg)';
        spinBtn.disabled = false;
        SetText(resTxt, resString);
        SetText(resNum, rnd);
        SetText(resTotal, `Total de Acertos: ${totalHits}`);
        Show(homeBtn);
        clearInterval(doAnim);
    }, 2500);
}

function ResetConf() {
    FillInput(confHighNum, 100);
    FillInput(confLowNum, 0);
}