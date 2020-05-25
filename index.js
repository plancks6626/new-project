let lifeforms = 0;

//innit toggleSlider
toggleSlider();

function reproduce() {
    lifeforms++;
    document.getElementById('lifeforms').innerHTML = lifeforms;
    console.log("Lifeform Created");
}


function evolve(phase) {
    console.log("Sufficient population for evolution to begin.")
    console.log("Increase population size to allow for more mutations.")
}

let phaseOne = true;
if (lifeforms >= 10&& phaseOne){
    setInterval(function(){

    }, 1000)
    phaseOne = false;
}

function toggleSlider() {
  var elem = document.getElementById("slidecontainer");
    if (elem.style.display === "none"){
        elem.style.display = "block";
    }
    else {
        elem.style.display = "none";
  }
}
