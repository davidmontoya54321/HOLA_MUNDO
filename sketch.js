function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(10, random(160, 90), 200);
  fill(mouseY, 110, 80);
  circle(mouseX + 80, mouseY + -25, mouseX);
  fill(200, 60, 0);
  rect(mouseX, mouseY, 50, 50);
}
