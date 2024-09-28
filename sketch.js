function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);
  rectMode(CENTER);
}

/*function draw() {
  background(10, random(160, 90), 100, ); // el quinto valor(x,x,x,x,yz) es para la transparencia

  strokeWeight(5); //grueso del contorno
  noFill(); //anula el relleno para todo lo que esta abajo
  stroke(10); // filo de la figura
  stroke(mouseY, 110, 80);
  // fill(mouseY, 110, 80); desactivado para funcionar "noFill"
  circle(mouseX + 80, mouseY + -25, mouseX);

  stroke(0, 255, 0);
  fill(200, 60, 0);
  rect(mouseX, mouseY, 50, 50);
}
*/

function draw() {
  background(random(0, 250), 0, 0, 60); // el quinto valor(x,x,x,x,yz) es para la transparencia

  strokeWeight(0);
  fill(250);

  strokeWeight(0);

  fill(0);
  circle(mouseX + 30, mouseY + 22, 60, 80); //capucha craneo

  fill(0);
  ellipse(mouseX + 30, mouseY + 70, 55, 100); //capucha

  fill(0);
  ellipse(mouseX + 8, mouseY + 50, 20, 50); //capucha

  fill(0);
  ellipse(mouseX + 50, mouseY + 50, 20, 50); //capucha

  fill(250);
  ellipse(mouseX + 30, mouseY + 70, 18, 40, 6); //boca

  fill(250);
  circle(mouseX + 30, mouseY + 25, 45); //craneo,blanco

  fill(250);
  ellipse(mouseX + 30, mouseY + 40, 45, 28, 70); //pomulos,blanco

  fill(250);
  ellipse(mouseX + 30, mouseY + 60, 35, 100); //mandibula,blanco

  strokeWeight(0);
  fill(0);
  ellipse(mouseX + 30, mouseY + 80, 17, 50, 6); //boca

  strokeWeight(3);
  fill(0);
  ellipse(mouseX + 30, mouseY + 70, 18, 40, 6); //boca

  strokeWeight(5);

  strokeWeight(7);
  noFill();
  arc(mouseX + 44, mouseY + 24, 15, 21, HALF_PI, PI); //ojo

  strokeWeight(7);
  noFill();
  arc(mouseX + 15, mouseY + 25, 20, 21, 50, 20, HALF_PI); //ojo

  point(mouseX + 28, mouseY + 42); //nariz

  point(mouseX + 35, mouseY + 42); //nariz

  fill(0);
  ellipse(mouseX + 30, mouseY + 69, 15, 25); //capucha

  strokeWeight(8);
  point(mouseX + 31.5, mouseY + 40); //nariz
}
