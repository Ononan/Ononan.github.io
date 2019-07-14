function saveResult(){
    if(player.flagWin) {
        player.flagTime = false;
        return;
    }
    let resultArr = [],
        flagSave  = true;
    if(localStorage.getItem("result") === null){
        resultArr[0] = { minute : player.time.minute, second : player.time.second, name : player.name };
        localStorage.setItem("result", JSON.stringify( resultArr ) );
        player.flagTime = false;
    }else{
        resultArr = JSON.parse( localStorage.getItem("result"));
        for(let i in resultArr){
            if( (resultArr[i].minute < player.time.minute)                                                 ||
                ((resultArr[i].minute <= player.time.minute) && (resultArr[i].second <= player.time.second))    ){
                resultArr.splice(i, 0, { minute : player.time.minute, second : player.time.second, name : player.name });
                flagSave = false;
                player.flagTime = false;
                break;
            }
        }
        if((resultArr.length < 10) && flagSave) {
            resultArr.push({ minute : player.time.minute, second : player.time.second, name : player.name });
            player.flagTime = false;
        }
        if(resultArr.length > 10) resultArr.pop();
        localStorage.setItem("result", JSON.stringify( resultArr ) );
    }
}

function printResultArr(){
    let resultArr = JSON.parse( localStorage.getItem("result")),
        newTr  = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        newTd3 = document.createElement("td");
    newTd1.innerHTML = "&#8470;";
    newTd2.innerHTML = "Имя";
    newTd3.innerHTML = "Время";
    div.appendChild( newTable );
    newTable.appendChild( newTr ); 
    newTr.appendChild( newTd1 );
    newTr.appendChild( newTd2 );
    newTr.appendChild( newTd3 );
    for(let i in resultArr){
        let minute,
            second;
        if(resultArr[i].minute < 10) minute = "0" + resultArr[i].minute;
        else  minute = resultArr[i].minute;
        if(resultArr[i].second < 10) second = "0" + resultArr[i].second;
        else second = resultArr[i].second;
        newTr  = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        newTd3 = document.createElement("td");
        newTd1.innerHTML = Number(i) + 1;
        newTd2.innerHTML = resultArr[i].name;
        newTd3.innerHTML = minute + " : " + second;
        newTable.appendChild( newTr ); 
        newTr.appendChild( newTd1 );
        newTr.appendChild( newTd2 );
        newTr.appendChild( newTd3 );
    }
    if(player.flagTime){ 
        let minute,
            second;
        if(player.time.minute < 10) minute = "0" + player.time.minute;
        else  minute = player.time.minute;
        if(player.time.second < 10) second = "0" + player.time.second;
        else second = player.time.second;
        newTd1.innerHTML = "...";
        newTd2.innerHTML = player.name;
        newTd3.innerHTML = minute + " : " + second;
    }
}