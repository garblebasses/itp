function setup() {
  createCanvas(300, 300);
  noStroke();
}

function draw() {
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
}