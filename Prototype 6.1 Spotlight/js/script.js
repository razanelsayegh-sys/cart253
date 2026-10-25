/**
 * Spotlight
 * Razan Elsaygh
 * 
 * The Foal is to create a theatre stage where the user moves a spoltlight 
 * with the mouse to find a hidden puppet before the timer end and the puppet 
 * moves to a random position.
 */

"use strict";

/**
 * Creating the Canvas
*/
function setup() {
    createCanvas(600, 400);
}


/**
 * Creating the drawing
*/
function draw() {

    background("#2b234e");

    //Drawing the static element of the drawing (in order)

    drawCurtains();
    drawPuppet();
}
/**
 * Drawing the curtains of the theatre
 */
function drawCurtains() {

    //Drawing the curtain on the left
    push();
    fill("red");
    stroke("darkred");
    strokeWeight(2);
    triangle(0, 250, 0, 600, 150, 490);
    ellipse(0, 0, 320, 620);
    pop();

    //Drawing the curtains line on the left
    push();
    noFill();
    stroke("darkred");
    strokeWeight(2);
    ellipse(0, 0, 320, 520);
    ellipse(0, 0, 220, 520);
    ellipse(0, 0, 220, 450);
    ellipse(0, 0, 120, 420);
    ellipse(0, 0, 100, 220);
    pop();

    //Drawing the curtains on the right
    push();
    fill("red");
    stroke("darkred");
    strokeWeight(2);
    triangle(600, 250, 600, 600, 450, 490);
    ellipse(600, 0, 320, 620);
    pop();

    //Drawing the curtains line on the right
    push();
    noFill();
    stroke("darkred");
    strokeWeight(2);
    ellipse(600, 0, 320, 520);
    ellipse(600, 0, 220, 520);
    ellipse(600, 0, 220, 450);
    ellipse(600, 0, 120, 420);
    ellipse(600, 0, 100, 220);
    pop();
}