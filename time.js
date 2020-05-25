var startDate = new Date();
var startTime = startDate.getTime();
var gameTime;

let timeToEvolve = 600;

setInterval(function(){
    var date = new Date();
    var time = date.getTime();
    gameTime = Math.round((time-startTime)/1000);
    console.log(gameTime);
}, 1000);

if (gameTime >= timeToEvolve){
    //photosynthesis
}
