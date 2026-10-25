/**
 * Spotlight
 * Razan Elsaygh
 * 
 * The Foal is to create a theatre stage where the user moves a spoltlight 
 * with the mouse to find a hidden ghost before the timer end and the ghost
 * moves to a random position.
 */

"use strict";

//The ghost
const ghost = {
    x: 280,
    y: 180,
    size: 80,
    colour: '#e5f2f7',
};

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
    drawGhost(ghost); //To display the puppet 
    drawSpotlight();
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

//Drawing the ghost
function drawGhost(ghost) {

    // Body of the ghost
    push();
    noStroke();
    fill(ghost.colour);
    ellipse(ghost.x, ghost.y, ghost.size);
    rect(ghost.x - ghost.size / 2, ghost.y, ghost.size, ghost.size / 2);

    //Wavy bottom
    ellipse(ghost.x - 25, ghost.y + 35, 30, 25);
    ellipse(ghost.x, ghost.y + 35, 30, 25);
    ellipse(ghost.x + 25, ghost.y + 35, 30, 25)
    pop();

    //Eyes of the puppet
    push();
    fill('white');
    ellipse(ghost.x - 10, ghost.y - 5, 16);
    ellipse(ghost.x + 10, ghost.y - 5, 16);
    pop();

    push();
    fill("#30251d");
    ellipse(ghost.x - 8, ghost.y - 3, 5);
    ellipse(ghost.x + 8, ghost.y - 3, 5);
    pop();


    //Drawing the Mouth
    push();
    fill("#4a1428");
    pop();

    //Pink cheeks
    push();
    fill("#ffb3c6");
    noStroke();
    ellipse(ghost.x - 27, ghost.y + 12, 12, 7);
    ellipse(ghost.x + 27, ghost.y + 12, 12, 7);
    pop();

}