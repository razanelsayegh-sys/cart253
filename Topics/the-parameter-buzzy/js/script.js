/**
 * Buzzy the parameter
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

/**
 * In this program we didn't change a lot but we made it much more organised
 */

// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 30,
    buzziness: 4
};



/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    // Move buzzy 
    // Now we don,t need this anymore
    //buzzyTheFly.x += random(-buzzyTheFly.buzziness, buzzyTheFly.buzziness);
    //buzzyTheFly.y += random(-buzzyTheFly.buzziness, buzzyTheFly.buzziness);


    /**Instead we will use this */
    //Move buzzy
    moveFly(buzzyTheFly);

    //Draw buzzy
    drawFly(buzzyTheFly);


    /**
     * And now we are going to take this and put it in it's own function alone
     */
    // Draw buzzy
    //push();
    //noStroke();
    //fill(0);
    //ellipse(fly.x, fly.y, fly.size); //We took of the buzzyTheFly and changed it to fly cuase they are the same
    //pop();


    /**
     * There are two chunks of code that could become functions instead
     */
    /**
     * Move the fly passed in as an argument by updating it's position
     * When buzzyTheFly is passed in, that means we will be changing 
     * buzzyTheFly's position!
     */

    function moveFly(fly) {
        fly.x += random(-fly.buzziness, fly.buzziness);
        fly.y += random(-fly.buzziness, fly.buzziness);
    }
}

/**
 * Here is it's own function
 * 
 * Draw the fly passed in as an argument 
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size); //We took of the buzzyTheFly and changed it to fly cuase they are the same
    pop();
}