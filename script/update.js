function update(){
    control();
    if(player.flagDX) stepPlayer();
    madeTrool();
    hitBolt();
    for(let i in player.bolt.bolts){
        if( player.bolt.bolts[i].x >= 1000 || player.bolt.bolts[i].x <= 0 ) player.bolt.bolts.splice( i, 1);
        else if( player.bolt.bolts[i].flag ) player.bolt.bolts.splice( i, 1);
    }
    troolStep();
    moobAtc();
    
    for(let i in player.bolt.bolts) player.bolt.bolts[i].x += player.bolt.bolts[i].dx;
    if(player.hp <= 0){
        cancelAnimationFrame(requestId);
        player.flagWin = true;
        endGame();
        return;
    }
    timerHP();
    timerMP();  
}

function jumpUp(){
    if(player.flagJump){
        player.flagJump = false;
        let timer = setInterval( () => {
            player.y -= player.speedJump;
            player.speedJump -= 0.2;
            if(player.y < 350) player.timer.jumpPlayer = 1;
            if(player.y < 340) player.timer.jumpPlayer = 2;
            if(player.y < 320) player.timer.jumpPlayer = 3;
            if(player.y < 300){
                clearInterval(timer);
                jumpDown();
            }
        },17);
    }
}

function jumpDown(){
    let timer = setInterval( () => {
        player.y += player.speedJump;
        player.speedJump += 0.2; 
        if(player.y < 350) player.timer.jumpPlayer = 4;
        if(player.y < 340) player.timer.jumpPlayer = 5;
        if(player.y < 320) player.timer.jumpPlayer = 6;
        if(player.y > 360){
            player.timer.jumpPlayer = 0;
            player.speedJump = 5;
            player.y = 360;
            player.flagJump = true;
            clearInterval(timer);
        }
    },17);
}

function stepPlayer(){
    if( player.x > 450 && ( !player.vector ) && ( player.fonX < ( fon.width - ( fon.width / 3 ) ) ) ){
        player.flagSpawnTroll = true;
        player.fonX += player.fonDX;
    }else{
        if(player.vector && player.x >= 0){
            player.x -= player.dx;
        }
        if(player.x <= 925 && (!player.vector)){
            player.x += player.dx;
        }
    }
    if( ( player.fonX >= ( fon.width - ( fon.width / 3 ) ) ) && player.flagSpawnBoss ){
        player.flagSpawnBoss = false;
        setTimeout( () => {
            createBoss();   
        },3000);
    }
    
}

function hitBolt(){
    for(let i in player.trool){
        for(let j in player.bolt.bolts){
            if((player.bolt.bolts[j].x > player.trool[i].x) && (player.bolt.bolts[j].x - 20 < player.trool[i].x)){
                player.bolt.bolts.splice( j, 1);
                player.trool[i].hp -= player.bolt.dmg;
                if(!player.trool[i].hp){
                    if(player.trool[i].flagBoss){
                        endGame();  
                    } 
                    if(!player.trool[i].flagAtc) clearInterval(player.trool[i].linkTrollAct);
                    player.trool.splice( i, 1);
                } 
            } 
        } 
    }
}

function moobAtc(){
    for(let i in player.trool){
        if(player.trool[i].flagPosition && player.trool[i].flagAtc){
            timerTroolAtc(i);
        }
    }
}

function troolStep(){
    for(let i in player.trool){
        if(player.x < player.trool[i].x - 60){
            if( ( player.flagDX && player.x > 450) && 
                ( player.fonX < fon.width / 2 )        ) player.trool[i].x -= player.trool[i].dx + 2;
            else player.trool[i].x -= player.trool[i].dx;
            player.trool[i].vector  = 1;
            player.trool[i].flagPosition = false;
        }else if(player.x > player.trool[i].x + 60){
            if(player.flagDX && player.x > 450 && ( player.fonX < ( fon.width - ( fon.width / 3 ) ) ) ) player.trool[i].x += 0;
            else player.trool[i].x += player.trool[i].dx;
            player.trool[i].vector  = 0;
            player.trool[i].flagPosition = false;
        }else{
            player.trool[i].flagPosition = true;
        }
    }
}



















