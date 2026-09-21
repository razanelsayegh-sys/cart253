/**
 * City lights
 * Razan Elsaygh
 * 
 * A window with a city skyline. 
 */

"use strict";

/**
 * Creates the canvas and sets up the initial state.
 */
function setup() {
   createCanvas(700,400);
}
/**
 * Draw the window and the skyline
 */

function draw() {
    drawWindow();
    drawSkyline();
    drawlights();
    drawmoon();
    drawStars();

}
/**
 * Draw the window frame from the inside
 */
function drawWindow(){
// Dark blue background of the inside of the room
 background(50,55,100);
 // Draw the window frame
 push();
    fill('white');
    rect(100,70,500,250);
 pop();

    //the window glass
 push();
    noStroke();
    fill('navy');
    rect(120,90,460,210);
 pop();
}
/**
 * Draw the skyline of the city outside the window
 */
function drawSkyline() {
    // Draw the city buildings(medium height)
    push();
    noStroke();
    fill('gray');
    rect(120, 180, 50, 120);
    rect(220, 160, 60, 140);
    rect(320, 180, 50, 120);
    rect(420, 180, 50, 120);
    rect(520, 180, 60, 120);
    pop();

    // Draw the city buildings(tall height)
    push();
    noStroke();
    fill('dimgray');
    rect(170, 110, 60, 190);
    rect(270, 130, 50, 170);
    rect(370, 120, 50, 180);
    rect(470, 145, 55, 155);
    pop();
// Draw the city buildings(short height)
    push();
    noStroke();
    fill('darkgray');
    rect(150, 220, 50, 80);
    rect(250, 220, 50, 80);
    rect(350, 220, 50, 80);
    rect(450, 220, 70, 80);
    pop();
}
function drawlights(){
    // Draw the lights in the buildings
    push();
    noStroke();
    fill('yellow');
    // lights in the medium height buildings
    //lights medium building 1
    rect(130, 190, 10, 10);
    //lights medium building 2
    rect(240, 170, 10, 10);
    //lights medium building 3
    rect(330, 190, 10, 10);
    //lights medium building 4
    rect(430, 190, 10, 10);
    //lights medium building 5
    rect(530, 190, 10, 10);
    rect(560, 230, 10, 10);
    pop();

    // lights in the tall height buildings
    push();
    noStroke();
    fill('yellow');
    //lights tall building 1
    rect(180, 120, 10, 10);
    rect(180, 150, 10, 10);
    rect(180, 180, 10, 10);
    //lights tall building 2
    rect(280, 140, 10, 10);
    //lights tall buildings 3
    rect(380, 130, 10, 10);
    rect(380, 160, 10, 10);
    rect(400, 180, 10, 10);
    //lights tall buildings 4
    rect(480, 155, 10, 10);
    pop();

    // lights in the short height buildings
    push();
    noStroke();
    fill('yellow');
    //lights short building 1
    rect(160, 230, 10, 10);
    rect(180, 250, 10, 10);
    //lights short building 2 
    rect(260, 230, 10, 10);
    rect(260, 250, 10, 10);
    //lights short building 3
    rect(360, 230, 10, 10);
    //lights short building 4
    rect(460, 230, 10, 10);
    rect(500, 230, 10, 10);
    rect(500, 260, 10, 10);
    pop();
}
function drawmoon(){
    // Draw the moon
    push();
    fill('lightgray');
    noStroke();
    ellipse(520, 120, 20, 20);
    pop();
}
function drawStars(){
    // Draw the stars
    push();
    fill('white');
    noStroke();
    ellipse(150, 120, 5, 5);
    ellipse(200, 105, 5, 5);
    ellipse(250, 120, 5, 5);
    ellipse(300, 100, 5, 5);
    ellipse(350, 110, 5, 5);
    ellipse(400, 115, 5, 5);
    ellipse(450, 100, 5, 5);
    pop();
}