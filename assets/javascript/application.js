document.addEventListener("DOMContentLoaded", function() {

const score = 0;
const aWidth;
const aHeight;
const timer;
const iterations;

window.addEventListener("load", setGameAreaBounds);

function setGameAreaBounds() {
  aWidth = innerWidth;
  aHeight = innerHeight;
  aWidth -= 22;
  aWidth -= 97;
  document.getElementById("gameArea").style.width = aWidth + "px";
  document.getElementById("gameArea").style.height = aHeight + "px";
  document.getElementById("dot").addEventListener("click", detectHit);
}

function detectHit() {
  score += 1;
  document.getElementById("scoreLabel").innerHTML = "Score: " + score;

}








  // Add your Javascript Here
})