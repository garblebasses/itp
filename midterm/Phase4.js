function setup() {
  createCanvas(400, 400);
  noStroke();
}

let tiles = 4

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function VERYHAPPY(x, y, s) {
  push();
  scale(s);
  fill(255, 220, 100);
  ellipse(50, 50, 100, 100);
  fill(150, 90, 20);
  ellipse(33, 40, 25, 25);
  fill(150, 90, 20);
  ellipse(67, 40, 25, 25);
  fill(255);
  ellipse(33, 40, 20, 20);
  fill(255);
  ellipse(67, 40, 20, 20);
  fill(150, 90, 20);
  triangle(35, 59, 65, 59, 50, 90);
  pop();
}

function draw() {
  let w = width/tiles;
  let h = height/tiles;
  let s = 4/tiles
  push();
  
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y <tiles; y++) {
      push();
      translate(x*w, y*h);
      VERYHAPPY(x, y, s);
      pop();
    }
  }
}