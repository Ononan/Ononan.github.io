let cnv = document.getElementsByTagName("canvas")[0],
    ctx = cnv.getContext( "2d" ),
    requestId,
    player;




// fon.onload = () => {
//     player = new Game("test");
//     time();
//     game();
// }

function game(){
    requestId = requestAnimationFrame(game);
    pause();
    if(player.flagPause) update();
    render();
}


















// var requestAnimFrame = (function(){
//     return window.reguestAnimationFrame         ||
//            window.webkitReguestAnimationFrame   ||
//            window.mozReguestAnimationFrame      ||
//            window.oReguestAnimationFrame        ||
//            window.msReguestAnimationFrame       ||
//            function(e){
//                 window.setTimeout(e, 1000 / 60);
//            };
// })();