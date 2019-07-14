let key;

document.addEventListener("keydown",function(e){
    key = e.keyCode;
});

function control(){
    document.addEventListener("keyup",function(e){
        if(e.keyCode == 68 || e.keyCode == 65){
            player.flagDX = false;
            clearInterval(player.timer.linkStep);
            player.timer.flagStep = true;
        } 
    });
    if( key == 65 ){
        player.flagDX = true;
        player.vector = true;
    }
    if( key == 68 ){
        player.flagDX = true;
        player.vector = false;
    }
    if( key == 87 ){
        jumpUp();
    }
    if(key == 49){
        if(player.timer.flagAtc1 && player.flagAtc && player.mp > 5){
            player.flagDX = false;
            timerSkill1();
        } 
    }
    if(key == 50){
        if(player.timer.flagAtc2 && player.flagAtc && player.mp > 10){
            player.flagDX = false;
            timerSkill2();
        } 
    }
    if(key == 51){
        if(player.timer.flagAtc3 && player.flagAtc && player.mp > 10){
            player.flagDX = false;
            timerSkill3();
        } 
    }
    
    key = 0;
}

function pause(){
    if(key == 27){
        if(player.flagPause){
            player.flagPause = false;
            clearInterval(player.timer.linkTroll);
            clearInterval(player.time.link);
        }else {
            player.flagPause = true;
            timerTrollStep();
            time();
        } 
        key = 0; 
    }
    
}