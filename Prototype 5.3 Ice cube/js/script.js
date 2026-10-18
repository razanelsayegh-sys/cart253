/**
 * Ice Splash
 * Razan Elsaygh
 * 
 * Drawing of an ice cube that falls in water.
 */

"use strict";

/**
 * Creating the canvas
*/
function setup() {
    createCanvas(400, 500);

}


/**
 * Drawing the background and adding the functions
*/
function draw() {
    background('#e39cae');
    //functions (in order)
    drawWater();
    drawIceCube();
    drawSplash();
}

//Drawing the water
function drawWater() {
    //drawing the water base
    push();
    noStroke();
    fill('#9ff2f2');
    rect(0, 350, 400, 150);
    pop();

    //drawing water rings

    push();
    noFill();
    stroke('#66c2c2');
    strokeWeight(2);
    ellipse(200, 420, 600, 120);
    ellipse(200, 420, 400, 50);
    ellipse(200, 420, 200, 20);
    pop();
}