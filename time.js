var startDate = new Date();
var startTime = startDate.getTime();
var gameTime;
let photosynthesisEnd = true;

let timeToEvolve = 2;
let sliderValue = document.getElementById("slidecontainer").value;


setInterval(function(){
    var date = new Date();
    var time = date.getTime();
    gameTime = Math.round((time-startTime)/1000);
    console.log(gameTime);
    if (gameTime >= timeToEvolve && photosynthesisEnd){
        toggleSlider();
        photosynthesisEnd = false;
        //photosynthesis
    }
    // if (sliderValue >= 99){
    //     var url = "file:///Users/clarkj/github/new-project/photosynthesis.html";
    //     window.location = url;
    // }

}, 1000);
