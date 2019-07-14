function timerTroolAtc(i){
    player.trool[i].flagAtc = false;
    intervalTrollAct(i);
    setTimeout( () => {
        player.trool[i].flagAtc = true;
        player.hp -= player.trool[i].dmg;
        clearInterval(player.trool[i].linkTrollAct);
        player.trool[i].timerTrollAtc = 0;
    },1500); 
}

function intervalTrollAct(i){
    player.trool[i].linkTrollAct = setInterval( () =>{
        player.trool[i].timerTrollAtc++;
    },1500 / 7);
}

function timerTrollStep(){
    player.timer.linkTroll = setInterval( () => {
        for(let i in player.trool){
            player.trool[i].timerTroll++;
            if(player.trool[i].timerTroll == 7) player.trool[i].timerTroll = 0;
        }
    },200);
}

function timerHP(){
    if(player.timer.flagHP && player.hp <= 99){
        player.hp++;
        player.timer.flagHP     = false;
        setTimeout( () => {
            player.timer.flagHP = true;
        },500);
    }
}

function timerMP(){
    if(player.timer.flagMP && player.mp <= 99){
        player.mp++;
        player.timer.flagMP     = false;
        setTimeout( () => {
            player.timer.flagMP = true;
        },500);
    }
}

function timerStepPlayer(){
    player.timer.flagStep = false;
    player.timer.linkStep = setInterval( () => {
        player.timer.stepPlayer++;
        if(player.timer.stepPlayer == 6) player.timer.stepPlayer = 0;
    },200);
}

function time(){
    player.time.link = setInterval( () => {
        player.time.second++;
        if(player.time.second == 60){ 
            player.time.minute++;
            player.time.second = 0;
        }
    },1000);
}


function timerSkill1(){
    player.mp -= 5;
    player.flagAtc = false;
    player.timer.flagAtc1 = false;
    player.timer.skill1 = 1;
    let timer1 = setInterval( () => {
        player.timer.skill1++;
        if(player.timer.skill1 == 38){
            player.timer.flagAtc1 = true;
            clearInterval(timer1);
        }
    },(618 / 38));
    let timer = setInterval( () =>{
        player.timer.atc++;
        if(player.timer.atc == 4) outBolt(0);
        if( player.timer.atc == 5){
            player.flagAtc = true;
            player.timer.atc = 0;
            clearInterval(timer);
        } 
    },120);
}
function timerSkill2(){
    player.mp -= 10;
    player.flagAtc = false;
    player.timer.flagAtc2 = false;
    player.timer.skill2 = 1;
    let timer1 = setInterval( () => {
        player.timer.skill2++;
        if(player.timer.skill2 == 38){
            player.timer.flagAtc2 = true;
            clearInterval(timer1);
        }
    },(10000 / 38));
    let timer = setInterval( () =>{
        player.timer.atc++;
        if(player.timer.atc == 4) {
            outBolt(-10);
            outBolt(0);
            outBolt(10);
        }
        if( player.timer.atc == 5){
            player.flagAtc = true;
            player.timer.atc = 0;
            clearInterval(timer);
        } 
    },250);
}

function timerSkill3(){
    player.mp -= 10;
    player.flagAtc = false;
    player.timer.flagAtc3 = false;
    player.timer.skill3 = 1;
    let timer1 = setInterval( () => {
        player.timer.skill3++;
        if(player.timer.skill3 == 38){
            player.timer.flagAtc3 = true;
            clearInterval(timer1);
        }
    },(10000 / 38));
    let countArrai = 0;
    let timer = setInterval( () =>{
        player.timer.atc++;
        if(player.timer.atc == 5){
            outBolt(0);
            countArrai++;
            player.timer.atc = 0;
        }
        if( countArrai == 3){
            player.flagAtc = true;
            player.timer.atc = 0;
            clearInterval(timer);
        } 
    },50);
}
