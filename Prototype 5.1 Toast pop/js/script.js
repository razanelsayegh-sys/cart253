/**
 * Morning toast 
 * Razan Elsaygh
 * 
 * When the user uses the mouse the toast pop out of the toaster. 
 */

"use strict";

/**
 * Creating the canvas
*/
function setup() {
    createCanvas(600, 400);

}


/**
 * Adding the background color and making the static objects of 
 * the drawing such as the toaster
*/
function draw() {
    background('yellow');

    //Drawing the toast that will when the mouse event is added
    push();
    fill('#F3D7A2');
    stroke('#cc946a');
    strokeWeight(5)
    rect(215, 175, 150, 150, 20, 20, 20, 20);
    pop();

    // Drawing the toaster body 
    push();
    fill('lightblue');
    noStroke();
    rect(160, 205, 260, 180, 20, 20, 20, 20); //the 4 last numbers = radius to every corner to make them rounded
    pop();

    //drawing the base of the toaster
    push();
    fill('darkgrey');
    noStroke();
    rect(150, 370, 280, 20, 20, 20, 20, 20);

    // the two legs
    rect(380, 370, 50, 30, 20, 20, 20, 20);
    rect(150, 370, 50, 30, 20, 20, 20, 20);
    pop();

    //Drawing the toaster handel
    push();
    fill('darkgrey');
    noStroke();
    rect(140, 260, 20, 10, 20, 20, 0, 0);
    pop();



}

