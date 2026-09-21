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
  fill(255, 0, 0);
  ellipse(250, 250, 200, 200);
  
}