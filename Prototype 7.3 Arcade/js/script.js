/**
 * Arcade
 * Razan Elsaygh
 * 
 * Arcade game where the users collects coins with it,s avatar
 */

"use strict";
/**
 * variables for the arcade game
 */

//Size of the game tiles
const tileSize = 30;

/**
 * Creating canvas
*/
function setup() {
    createCanvas(500, 600);
}


/**
 * Creating the drawing 
*/
function draw() {
    background("#17152E");

    //Functions called
    drawArcade();
}

/**
 * Drawing the arcade machine
 */
function drawArcade() {

    //Main arcade body
    push();
    noStroke();
    fill("#5A189A");
    rect(20, 30, 460, 460, 25);
    pop();

    // Control buttons
    push();
    noStroke();
    fill("#FFD166");
    ellipse(340, 575, 30);
    fill("#06D6A0");
    ellipse(390, 575, 30);
    fill("#E63946");
    ellipse(440, 575, 30);
    pop();

    // Control button (white)
    push();
    stroke("#FFFFFF");
    strokeWeight(30);
    line(90, 600, 90, 570);
    line(50, 600, 130, 600);
    pop();

    // Arcade title
    push();
    fill("#FFFFFF");
    noStroke();
    textAlign(CENTER);
    textSize(28);
    textStyle(BOLD);
    text("SPACE COLLECTOR", 250, 525);
    pop();
}