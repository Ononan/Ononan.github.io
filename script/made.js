function Game(name){
    this.x              = 0;
    this.dx             = 2;
    this.y              = 360;
    this.dy             = 360;
    this.speedJump      = 5;
    this.vector         = 0;
    this.hp             = 100;
    this.trool          = [];
    this.mp             = 100;
    this.fonX           = 0;
    this.fonDX          = 4;
    this.flagPause      = true;
    this.flagTime       = true;
    this.name           = name;
    this.flagSpawnTroll = true;        
    this.flagJump       = true;
    this.direction      = true;
    this.flagAtc        = true;
    this.flagSpawnBoss  = true;
    this.flagWin        = false;
    this.countTroll     = 0;
    this.time           = {
        second   : 0,
        minute   : 0
    }
    this.bolt           = {
        bolts        : [],
        dmg          : 20,
        wastageMp    : 5
    };
    this.timer          = {
        skill1         : 38,
        skill2         : 38,
        skill3         : 38,
        flagBolt       : false,
        flagHP         : true,
        flagMP         : true,
        stepPlayer     : 0,
        atc            : 0,
        jumpPlayer     : 0,
        flagAtc1       : true,
        flagAtc2       : true,
        flagAtc3       : true,
        flagStep       : true,
        flagStepTroll  : true,
        speedRespawn   : 10000
    };
}


function madeTrool(){
    if( (!(player.fonX % 900)) && player.flagSpawnTroll && (player.fonX < 3500) ){
        player.flagSpawnTroll = false;
        player.countTroll++;
        for(let i = 0; i < player.countTroll; i++){
            player.trool.push({
                x              : 750 + (60 * i),
                dx             : 0.5,
                vector         : 1,
                dmg            : 5,
                hp             : 40,
                flagPosition   : false,
                flagAtc        : true,
                timerTroll     : 0,
                timerTrollAtc  : 0,
                widthStep      : 120,
                heightStep     : 80,
                widthAtc       : 130,
                heightAtc      : 115,
                positionYStep  : 361,
                positionYAtc   : 326    
            }); 
        }
         
    }
    
}
function createBoss(){
    player.trool.push({
        x              : 800,
        dx             : 0.5,
        vector         : 1,
        dmg            : 10,
        hp             : 500,
        flagPosition   : false,
        flagAtc        : true,
        timerTroll     : 0,
        timerTrollAtc  : 0,
        widthStep      : 120 * 2,
        heightStep     : 80 * 2,
        widthAtc       : 130 * 2,
        heightAtc      : 115 * 2,
        positionYStep  : 290,
        positionYAtc   : 220,
        flagBoss       : true  
    }); 
}
function outBolt(i){
    if(!player.vector){
        player.bolt.bolts.push({
            x         : player.x + 55,
            y         : 400 + i,
            dx        : 7,
            vector    : 0
        });
    }else{
        player.bolt.bolts.push({
            x         : player.x - 20,
            y         : 400 + i,
            dx        : -7,
            vector    : 1
        });
    }
}