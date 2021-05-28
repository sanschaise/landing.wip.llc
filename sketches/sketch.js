/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  // Put setup code here
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  background(0);
  noStroke();
  textSize(12);
}

let time = 0;
let size = 5;
let gap = 30;
function draw() {
  time += 0.01;
  fill(0, 200);
  rect(width / 2, height / 2, width, height);
  push();

  translate(width / 2, height / 2);

  fill(255);
  text("WORK IN PROGRESS... LLC", 0, 5);
  for (let i = 4; i < 20; i++) {
    rotate(time * time);
    // translate(sin(time * time) * (size * i), -cos(time * time) * (size * i));
    // text("WIP... LLC", 0, i * size);
    ellipse(i * gap, 0, size + map(mouseX - mouseY, 0, width - height, 0, 40));
    ellipse(i * -gap, 0, size + map(mouseX - mouseY, 0, width - height, 0, 40));
  }

  // fill(0);
  // ellipse(0, 0, sin(time - 10) * 250);
  pop();
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
