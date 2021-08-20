function AssignInput(input){
    if(input.type == "number"){
        if(isNaN(parseInt(input.value))) {
            input.value = 0
        } else {
            input.value = parseInt(input.value); //Remover 0s à esquerda
        }
        return parseInt(input.value);
    }
    return input.value;
}

function FillInput(input, value) {
    if(input.type == "number"){
        if(isNaN(parseInt(value))) value = 0;
    }
    input.value = value;
}

function SetText(element, text) {
    element.textContent = text;
}

function Show(element){
    if(element.classList.contains("game-result")){
        element.style.display = "flex";
    } else {
        element.style.display = "initial";
    }

    window.setTimeout(() => element.style.opacity = "100%" , 0);
}