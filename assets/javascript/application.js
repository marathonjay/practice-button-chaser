document.addEventListener("DOMContentLoaded", function() {

let score = 0;
let aWidth;
let aHeight;
let timer;
let iterations;

window.addEventListener("load", setGameAreaBounds);

function setGameAreaBounds() {
  aWidth = innerWidth;
  aHeight = innerHeight;
  aWidth -= 22;
  aWidth -= 97;
  document.getElementById("gameArea").style.width = aWidth + "px";
  document.getElementById("gameArea").style.height = aHeight + "px";
  aWidth -= 74;
  aHeight -= 74;
  moveDot();
}

function detectHit() {
  score += 1;
  document.getElementById("scoreLabel").innerHTML = "Score: " + score;

}

document.getElementById("dot").addEventListener("click", detectHit);








  // Add your Javascript Here
})