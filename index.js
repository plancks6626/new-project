let lifeforms = 0;


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
    setInterval(photosynthesis)
    phaseOne = false;
}

// var show = function(elem) {
//   elem.classList.add('is-visible');
// };
//
// var hide = function(elem) {
//   elem.classList.remove('is-visible');
// };
//
// var toggle = function (elem) {
//   elem.classList.toggle('is-visible');
// };
//
// hide(document.getElementsByClassName("slidecontainer"));
//
// if (lifeforms == 1){
//     show(document.getElementsByClassName("slidecontainer"));
// }
