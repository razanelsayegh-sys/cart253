/**
 * Trisolaris Returns (get it?)
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Calculate their colour
 * based on their parameters.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);

    //Slowing down the frame rate to avoid any seizures
    frameRate(2);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    //background("#87ceeb");

    //Ask random() for a random number between 0 and 255
    //and assign it to a variable
    let randomBackgroundShade = random(0, 255);
    //Use the variable with the random number
    background(randomBackgroundShade);

    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);


}

/**
 * Draws a Trisolarian sun
 */
function drawSun(x, y, size) {

    /**
     * As much as this is good but 
     * it's way to complicated, let's make it simpler by truning it into
     * it's own function stroke weight changement  
     */
    // Calculate the stroke weight of the sun based on
    // the distance of the mouse position
    //const minWeight = 20;
    //const maxWeight = 1;
    //let d = dist(mouseX, mouseY, x, y);
    //let weight = map(d, 0, width, minWeight, maxWeight);

    /**Now we can call our function*/
    //Get the stroke weight for this sun
    let weight = calculateStrokeWeight(x, y);

    push();
    strokeWeight(weight);
    stroke("#ffff00");
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}

/**
 * To do that, we essentiallt need to:
 * 
 * 1- Take the calculating code from inside drawSun()
 * 2- Move it to a new function, we'll call it calculateStrokeWeight()
 * 3- Give that function any parameters it needs( we need the sun's 'x' and 'y' for this calculation)
 * 4-Return the resulting calculation 
 */

/**
 * Adds the two parameters toghther and returnes the result
 */
function calculateStrokeWeight(x, y) {

    //calculate the stroke weight of the sun based on
    //the distance of the mouse position

    const minWeight = 20;
    const maxWeight = 1;
    let d = dist(mouseX, mouseY, x, y);
    let result = map(d, 0, innerWidth, minWeight, maxWeight);

    //Actually return the result of our calculation of where ever this
    //function was called
    return result;
}

/**
 * Important note:
 * 
 * - This is a function with parameters because we need to provide the sun position 
 * so we can calculate the distance from the mouse
 * 
 * - We calculate the result (a mapping of distance to weight) and 
 * store it in a variable (result)
 * 
 * - On the final line of the function we return the value 
 * in our result variable by using the special return reserved word. That’s 
 * what sends the result back out of the function 
 * (without it, nothing comes out)
 */