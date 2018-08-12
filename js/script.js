let x = 0;
let y = 0;
let z = 0;
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  x = random(0, 1000);
  y = random(0, 1000);
  z = random(0, 300);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  ellipse(x, y, z, z);
  fill(r, g, b);
  noStroke();
}
