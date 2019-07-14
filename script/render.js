let fon        = new Image(),
    play       = new Image(),
    icon1      = new Image(),
    icon2      = new Image(),
    icon3      = new Image(),
    trollSkinAtc   = [  new Image(),
                        new Image()   ],
    trollSkinStep  = [  new Image(),
                        new Image()   ],
    playerSkinJump = [  new Image(),
                        new Image()   ],
    playerSkinAtc  = [  new Image(),
                        new Image()   ],
    playerSkin     = [  new Image(),
                        new Image()   ],
    boltImg        = [  new Image(),
                        new Image()   ],
    playerSkinStep = [  new Image(),
                        new Image()   ];

                        
icon2.src              = "img/icon2.png";
icon3.src              = "img/icon3.png";
trollSkinAtc[0].src    = "img/trollAtc.png";
trollSkinAtc[1].src    = "img/trollatc.mvETM.png";
trollSkinStep[0].src   = "img/troll.png";
trollSkinStep[1].src   = "img/troll.7l80U.png";
playerSkinJump[0].src  = "img/jump.png";
playerSkinJump[1].src  = "img/jump.ppwzZ.png";
playerSkinAtc[0].src   = "img/playerAtc.png";
playerSkinAtc[1].src   = "img/playeratc.VsDBg.png";
playerSkin[0].src      = "img/player.png";
playerSkin[1].src      = "img/player.JptF5.png";
playerSkinStep[0].src  = "img/arrr.png";
playerSkinStep[1].src  = "img/arrr.Dc3jx.png";
boltImg[0].src         = "img/arrai.png";
boltImg[1].src         = "img/arrai.pOUzL.png";
fon.src                = "img/fon.png";
play.src               = "img/play.png";
icon1.src              = "img/icon1.jpg";

function render(){
    ctx.drawImage(fon, player.fonX, 0, (fon.width / 3), fon.height, 0, 0, 1000, 500);
    for(let i in player.bolt.bolts){
        ctx.drawImage(boltImg[player.bolt.bolts[i].vector * 1], player.bolt.bolts[i].x, player.bolt.bolts[i].y, 50, 15);
    }
    renderTrolls();
    renderPlayer();
    renderInformItems();
}

function renderTrolls(){
    for(let i in player.trool){
        if(player.timer.flagStepTroll){
            player.timer.flagStepTroll = false;
            timerTrollStep();
        }
        if(player.trool[i].flagAtc){
                if(player.trool[i].vector){
                    ctx.drawImage(  trollSkinStep[1], 
                                    trollSkinStep[1].width - (180 * (player.trool[i].timerTroll + 1)),
                                    0, 
                                    180, 
                                    trollSkinStep[1].height, 
                                    player.trool[i].x - 25, 
                                    player.trool[i].positionYStep, 
                                    player.trool[i].widthStep,
                                    player.trool[i].heightStep          );
                }else{
                    ctx.drawImage(  trollSkinStep[0],
                                    player.trool[i].timerTroll * 180, 
                                    0, 
                                    180, 
                                    trollSkinStep[0].height, 
                                    player.trool[i].x - 30, 
                                    player.trool[i].positionYStep, 
                                    player.trool[i].widthStep, 
                                    player.trool[i].heightStep          );            
                }
        }else{
                if(player.trool[i].vector){
                    ctx.drawImage(  trollSkinAtc[1], 
                                    trollSkinAtc[1].width - (200 * (player.trool[i].timerTrollAtc + 1)), 
                                    0, 
                                    200, 
                                    trollSkinAtc[1].height, 
                                    player.trool[i].x - 25, 
                                    player.trool[i].positionYAtc , 
                                    player.trool[i].widthAtc, 
                                    player.trool[i].heightAtc         );
                }else{
                    ctx.drawImage(  trollSkinAtc[0], 
                                    player.trool[i].timerTrollAtc * 200, 
                                    0, 
                                    200, 
                                    trollSkinAtc[0].height, 
                                    player.trool[i].x - 30, 
                                    player.trool[i].positionYAtc , 
                                    player.trool[i].widthAtc, 
                                    player.trool[i].heightAtc         );            
                }  
        } 
    }
}

function renderPlayer(){
    if(!player.flagAtc){
        if(player.vector){
            ctx.drawImage(  playerSkinAtc[1], 
                            playerSkinAtc[1].width - (130 * (player.timer.atc + 1)), 
                            0, 
                            130, 
                            playerSkinAtc[player.vector * 1].height, 
                            player.x - 55, 
                            player.y, 
                            115, 
                            80      );
        }else{
            ctx.drawImage(  playerSkinAtc[0],
                            player.timer.atc * 130, 
                            0, 
                            130, 
                            playerSkinAtc[player.vector * 1].height, 
                            player.x, 
                            player.y, 
                            115, 
                            80      );            
        }
    } else if(!player.flagJump){
        if(player.vector){
            ctx.drawImage(  playerSkinJump[1],
                            playerSkinJump[1].width - (80 * (player.timer.jumpPlayer + 1)), 
                            0, 
                            80,
                            playerSkinJump[player.vector * 1].height, 
                            player.x, 
                            player.y, 
                            65, 
                            80      );
        }else{
            ctx.drawImage(  playerSkinJump[0],
                            player.timer.jumpPlayer * 80, 
                            0, 
                            80, 
                            playerSkinJump[player.vector * 1].height, 
                            player.x, 
                            player.y, 
                            65, 
                            80      ); 
        } 
    }else if(player.flagDX){
        if(player.timer.flagStep)timerStepPlayer();
        if(player.vector){
            ctx.drawImage(  playerSkinStep[1],
                            playerSkinStep[1].width - (80 * (player.timer.stepPlayer + 1)), 
                            0, 
                            80, 
                            playerSkinStep[player.vector * 1].height, 
                            player.x, 
                            player.y, 
                            65, 
                            80      );
        }else{
            ctx.drawImage(  playerSkinStep[0],
                            player.timer.stepPlayer * 80, 
                            0, 
                            80, 
                            playerSkinStep[player.vector * 1].height, 
                            player.x, 
                            player.y, 
                            65, 
                            80      );            
        }       
    }else {
        ctx.drawImage(playerSkin[player.vector * 1], player.x, player.y , 65, 80);
    } 
}

function renderInformItems(){
    ctx.strokeRect(15, 15, 152, 15);
    ctx.strokeRect(15, 40, 152, 15);
    ctx.fillStyle = "red";
    ctx.fillRect(16, 16, player.hp * 1.5, 13);
    ctx.fillStyle = "blue";
    ctx.fillRect(16, 41, player.mp * 1.5, 13);
    renderTime();
    ctx.drawImage(play, ((play.width / 2) + 20) * !(player.flagPause), 0, play.width / 2, play.height, 960, 5, 40, 40);
    renderSkills();
}

function renderSkills(){
    ctx.drawImage(icon1, 16, 81, 38, 38);
    ctx.strokeRect(15, 80, 40, 40);
    ctx.globalAlpha = 0.5;
    ctx.fillRect( 16, 81, 38 - player.timer.skill1, 38);
    ctx.globalAlpha = 1;
    ctx.font = '12px sans-serif';
    ctx.fillText("1", 47, 117);
    ctx.drawImage(icon2, 16, 81 + 50, 38, 38);
    ctx.strokeRect(15, 80 + 50, 40, 40);
    ctx.globalAlpha = 0.5;
    ctx.fillRect( 16, 81 + 50, 38 - player.timer.skill2, 38);
    ctx.globalAlpha = 1;
    ctx.font = '12px sans-serif';
    ctx.fillText("2", 47, 117 + 50);
    ctx.drawImage(icon3, 16, 81 + 100, 38, 38);
    ctx.strokeRect(15, 80 + 100, 40, 40);
    ctx.globalAlpha = 0.5;
    ctx.fillRect( 16, 81 + 100, 38 - player.timer.skill3, 38);
    ctx.globalAlpha = 1;
    ctx.font = '12px sans-serif';
    ctx.fillText("3", 47, 117 + 100);
}

function renderTime(){
    let second,
        minute;
    if(player.time.minute < 10) minute = "0" + player.time.minute;
    else  minute = player.time.minute;
    if(player.time.second < 10) second = "0" + player.time.second;
    else second = player.time.second;
    ctx.fillStyle = "white";
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(minute + " : " + second, 880, 30);
}