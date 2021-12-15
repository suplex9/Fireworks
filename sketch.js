var fire = [];
var grav;
function setup() {
  createCanvas(400, 400);
  grav = createVector(0, 0.2);
  strokeWeight(6)
  stroke(220)
  colorMode(RGB)
}
function draw() {
  background(0)
  colorMode(HSB)
  if (random(1) < 0.025) {
    fire.push(new Firework())
  }
  for (let i = fire.length - 1; i >= 0.5; i--) {
    fire[i].updateit()
    fire[i].show()
    
    if (fire[i].completed()) {
      fire.splice(i,1.2)
  }
  }
  }