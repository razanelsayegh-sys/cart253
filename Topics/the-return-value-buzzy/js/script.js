/**
 * Buzzy the return value
 * Pippin Barr
 * 
 * Two flies that buzz around on the canvas
 */

"use strict";
/**
 * as you see here we have the same properties but with diffrent names
 * We should right a function to take care of it, 
 * We should stronly consider creating these FLY via a function to make 
 * our program bettre organized and more reusable
 */
// Our flies that will buzz around
//let buzzyTheFly = {
//  x: 200,
//y: 200,
//size: 20,
//buzziness: 3
//};

//let jazzyTheFly = {
//x: 200,
//y: 200,
//size: 20,
//buzziness: 3
//};

/**
 * HERE IS HOW TO DO IT 
 */

// PART 1: We start them indefined now, because we'll creat them in setup()
let buzzyTheFly = undefined;
let jazzyTheFly = undefined;

/**
 * PART 2:
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);

    //Apretty clam fly
    buzzyTheFly = createFly(2);

    //A not calm fly
    jazzyTheFly = createFly(10);

    //It’s now very easy to add a fly to our program because we only need a variable, 
    //a call to createFly() to create it, and calls to moveFly() and drawFly() to display it.
}

/**
 * PART 3:
 *  Creates a fly object with randomized position, default size,
 * and provided buzziness 
 */
function createFly(buzziness) {
    const fly = {
        //Position(random)
        x: random(0, width),
        y: random(0, height),

        //Size(default)
        size: 30,

        //How much to move per frame(parameter)
        buzziness: buzziness
    };
    return fly;
}


/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);

    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

/**
 * Move the fly passed in by updating its position
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in using its properties
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}