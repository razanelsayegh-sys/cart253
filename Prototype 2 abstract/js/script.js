/**
 * Abstract 
 * Razan Elsaygh
 * 
 *Creating a abstract art piece with diffrent geometrical formes and colors.
 */

"use strict";

/**
 * Ceating the canvas 
*/
function setup() {
    createCanvas(400,400)
}


/**
 * Drawing the abstract art piece
*/
function draw() {
    drawbackground();
    drawCircle();
    drawTriangle();
    
}


/**
 * Drawing the background
*/
function drawbackground() {
    push();
    background(255, 105, 173);
    pop();
}
/**
 * Drawing the background circle with transparency
 */
function drawCircle(){
//First circle with transparency
    push();
    fill(255, 255, 200, 70);
    noStroke();
    ellipse(200, 200, 390, 390);
    pop();
}
function drawTriangle(){
// First triangle 
    push();
    fill(255, 200, 0);
    noStroke();
    triangle(10, 50, 400, 10, 150, 390);
    pop();
//Second triangle with transparency
    push();
    fill(255, 165, 0, 150);
    noStroke();
    triangle(20, 10, 50, 380, 400, 280);
    pop();
//Third triangle with transparency
    push();
    fill(255, 210, 0, 150);
    noStroke();
    triangle(320, 5, 10, 150, 350, 400);
    pop();
//Fourth triangle with transparency
    push();
    fill(255, 210, 0, 110);
    noStroke();
    triangle(410, 105, 0, 340, 250, 0);
    pop();
}
