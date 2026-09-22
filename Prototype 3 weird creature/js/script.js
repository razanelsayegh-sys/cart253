/**
 * Weird creature
 * Razan Elsaygh
 * 
 * Creating a weird and playful creature or alien that is made up of different shapes and colors. 
 */

"use strict";

/**
 * Creating the canvas 
*/
function setup() {
createCanvas(500,500);
}


/**
 * Creating the background and the creature
 */
function draw() {
  background(0,128,168);

  drawCreature();
  drawFace();
  drawbackgroundcreature();
}

/**
 * Drawing the base of thecreature
 */
function drawCreature() {
//Drawing the first part of the creature's face
push();
  fill("lightgreen");
  noStroke();
  ellipse(250, 250, 200, 225);
pop();

//Drawing the bottom half of the creature's face
push();
  fill("lightgreen");
  noStroke();
  ellipse(250, 400, 300, 200);
pop();

//Drawing the ears of the creature
push();
  fill("lightgreen");
  noStroke();
  ellipse(100, 300, 50, 50);
  ellipse(400, 300, 50, 50);
pop();

//Drawing the stroke that connects the ears to the face
push();
  stroke("lightgreen");
  strokeWeight(10);
  line(100, 300, 250, 350);
  line(400, 300, 250, 350);
pop();
}