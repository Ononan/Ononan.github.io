let inputId     = document.getElementsByTagName("input")[0],
    div         = document.getElementById("div"),
    button      = document.getElementsByTagName("button")[0],
    newSpan     = document.createElement("span"),
    flagNewSpan = true,
    namePlayer,
    newTable  = document.createElement("table");

newSpan.innerHTML = "Минимальный размер имени 4 символа";



button.onclick = () => {
    if(inputId.value.length >= 4){
        player = new Game(inputId.value);
        while (newTable.firstChild) {
            newTable.removeChild(newTable.firstChild);
        }
        div.style.display = "none";
        cnv.style.display = "block";
        setTimeout(() => {
            game();
            time();
        }, 1000);  
    }else{
        errorInput();
        return;
    } 
}

function errorInput(){
    if(flagNewSpan){
        div.insertBefore(newSpan, div.children[1]);
    }else{
        if(div.children[1] == newSpan) div.removeChild(newSpan);
        flagNewSpan = true;
    }
}

function endGame(){
        clearInterval(player.time.link);
        setTimeout( () => {
            cancelAnimationFrame(requestId);
            cnv.style.display = "none";
            div.style.display = "block";
            inputId.style.display = "none";
            button.innerHTML = "Начать заново";
            saveResult();
            printResultArr();            
        }, 3000);
}

inputId.oninput = () => {
    if(!(  ((inputId.value[inputId.value.length - 1] >= "a")  &&
            (inputId.value[inputId.value.length - 1] <= "z")) ||
           ((inputId.value[inputId.value.length - 1] >= "A")  &&
            (inputId.value[inputId.value.length - 1] <= "Z")) ||
           ((inputId.value[inputId.value.length - 1] >= "а")  &&
            (inputId.value[inputId.value.length - 1] <= "я")) ||
           ((inputId.value[inputId.value.length - 1] >= "А")  &&
            (inputId.value[inputId.value.length - 1] <= "Я")) ||
           ((inputId.value[inputId.value.length - 1] >= "0")  &&
            (inputId.value[inputId.value.length - 1] <= "9"))    ) ){
        inputId.value = inputId.value.substring(0, inputId.value.length - 1);
        
    }else{
        flagNewSpan = false;
        errorInput();
    }
}