const effectElements = document.getElementsByClassName("effect");
const dateElement = document.getElementsByClassName("date")[0];
const timeElement = document.getElementsByClassName("time")[0];
let newRnd, linkRnd, linkTxt;
let oldLtr, newNum;

function ChangeLetter() {
    newRnd = Math.floor(Math.random() * 8);
    linkRnd = Math.floor(Math.random() * effectElements.length);
    linkTxt = effectElements[linkRnd].textContent;

    switch (newRnd) {
        case 1:
            oldLtr = "a";
            newNum = "4";
            break;
        case 2:
            oldLtr = "e";
            newNum = "3";
            break;
        case 3:
            oldLtr = "i";
            newNum = "1";
            break;
        case 4:
            oldLtr = "o";
            newNum = "0";
            break;
        case 5:
            oldLtr = "s";
            newNum = "2";
            break;
        case 6:
            oldLtr = "t";
            newNum = "7";
            break;
        case 7:
            oldLtr = "m";
            newNum = "77";
            break;
        default:
            oldLtr = "";
            newNum = "";
            break;
    }

    let toNum = window.setInterval(() => {
        SetText(effectElements[linkRnd], linkTxt.replace(oldLtr, newNum));
    }, 100);

    let toLetter = window.setInterval(() => {
        SetText(effectElements[linkRnd], linkTxt.replace(newNum, oldLtr));

        window.clearInterval(toNum);
        window.clearInterval(toLetter);
        ChangeLetter();
    }, 200);
}

function FormatTime(t) {
    if(t < 10) {
        return t = '0' + t;
    } else {return t};
}

window.setInterval(() => {
    let date = new Date();
    const dateObj = {
        day : FormatTime(date.getDate()),
        month : FormatTime(date.getMonth()),
        year : date.getFullYear(),
        hour : FormatTime(date.getHours()),
        minute : FormatTime(date.getMinutes()),
        second : FormatTime(date.getSeconds())
    };

    dateElement.innerHTML = `${dateObj.day}/${dateObj.month}/${dateObj.year}`;
    timeElement.innerHTML = `${dateObj.hour}:${dateObj.minute}:${dateObj.second}`;
}, 1000);



