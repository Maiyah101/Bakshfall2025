let spin = 0;

function setup() {
  createCanvas(720, 400);
  angleMode(DEGREES);

  // solid black background
  background(0);
}

function draw() {
  // redraw solid black every frame
  background(0);

  // changing color mode
  colorMode(HSB);

  // rotating shape cluster
  push();
  translate(width/2, height/2);
  rotate(spin);

  // weird star shape made out of triangles
  for (let i = 0; i < 12; i++) {
    fill((spin + i * 20) % 360, 80, 90);
    rotate(30);
    triangle(0, -80, -20, -40, 20, -40);
  }
  pop();

  // random bouncing circles
  for (let i = 0; i < 5; i++) {
    fill((spin * 2 + i * 50) % 360, 60, 80);
    circle(
      (sin(frameCount + i * 10) * 200) + width/2,
      (cos(frameCount/2 + i * 30) * 100) + height/2,
      30 + sin(frameCount + i * 10) * 10
    );
  }

  spin += 1;
}
