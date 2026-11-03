/**
 * Carnaval
 * Razan Elsaygh
 * 
 * Carnival booth with ballons, the user gets to pop the ballons 
 * by clicking on them and new ballons get added to the screen.
 */

"use strict";

/**
 * Creating canvas
*/
function setup() {
    createCanvas(600, 500);
}


/**
 * Creating the drawing
*/
function draw() {

    //Background colour
    background("#A8DADC");

    //functions called
    drawBooth();
}


/**
 * Drawing the carnaval booth
 */
function drawBooth() {

    //Booth structure
    push();
    noStroke();
    fill("#e2c0a4");
    rect(50, 100, 500, 600);
    pop();

    //Booth roof
    push();
    noStroke();
    fill("#E63946");
    rect(20, 20, 560, 130, 20, 20);
    pop();

    //Stripes on the roof
    push();
    noStroke();
    fill("#F1FAEE");
    rect(70, 20, 40, 120);
    rect(170, 20, 40, 120);
    rect(275, 20, 40, 120);
    rect(370, 20, 40, 120);
    rect(475, 20, 40, 120);
    pop();

    //Counter
    push();
    noStroke();
    fill("#F1FAEE");
    rect(50, 350, 500, 140);
    pop();

    //Ground
    push();
    noStroke();
    fill("#457B9D");
    rect(0, 450, 600, 50);
    pop();

    //Front decoration
    fill("#E63946");
    textAlign(CENTER);
    textSize(30);
    text("CARNAVAL", 300, 420);
}
