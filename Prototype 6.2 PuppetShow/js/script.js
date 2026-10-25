/**
 * Stars Show
 * Razan Elsaygh
 * 
 * The goal is to create an animation where a star change apprence when the 
 * users mouse is pressed
 */

"use strict";

/**
 * Creating the canvas
*/
function setup() {
    createCanvas(600, 400);
}


/**
 * creating the drawing/ aniamtion
*/
function draw() {
    //Background color
    background("#17233f");

    // Functions draw created
    drawStage();
}


/**
 * Drawing the stage (static element)
 */
function drawStage() {

    //Draw the stage floor
    push();
    noStroke();
    fill("#caae67");
    rect(0, 350, 600, 50);
    pop();

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