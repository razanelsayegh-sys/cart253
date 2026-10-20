/**
 * Ice Splash
 * Razan Elsaygh
 * 
 * Drawing of an ice cube that falls in water.
 */

"use strict";

// The ice cube
const iceCube = {

    //position
    x: 160,
    y: 20,

    //size
    size: 80,

    //corners
    corners: 20,

    //color
    fill: '#d3ecf9',

    //check if the ice cube is falling

    falling: false,

    //speed

    speed: 2.5

};

const iceSplash = {

    //position
    x: 200,
    y: 350,

    //size
    size: 5,

    //color
    fill: '#9ff2f2',

    //check if the ice cube is visible

    visible: false

};



/**
 * Creating the canvas
*/
function setup() {
    createCanvas(400, 500);

}

/**
 * Drawing the water
 */
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

/**
 * Drawing the background and adding the functions
*/
function draw() {
    background('#e39cae');

    //functions created to make the drawing 
    drawIceCube();
    drawWater();
    drawSplash();

    //Make the ice cube fall (use an if statement)

    if (iceCube.falling === true) {
        iceCube.y = iceCube.y + iceCube.speed; //If the ice cube is falling, how fast it moves

        //check if the ice cube touches the water
        if (iceCube.y >= iceSplash.y - 10) { //make the ice cube move after the water
            iceCube.falling = false;      //Stop the ice from falling
            iceSplash.visible = true;    //Make the splash appear
        }
    }
}

/**
 * Drawing the water
 */
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

/**
 * Drawing the ice cube
 */

function drawIceCube() {
    push();
    fill(iceCube.fill);
    stroke('#bed5e1');
    strokeWeight(2);
    rect(iceCube.x, iceCube.y, iceCube.size, iceCube.size, iceCube.corners, iceCube.corners, iceCube.corners, iceCube.corners);
    pop();
}

/**
 * Draw the splash
 */

function drawSplash() {
    if (iceSplash.visible === true) { //Draws the splash when it's visible
        fill('#9ff2f2');
        stroke(iceSplash.fill);
        strokeWeight(3);

        //Drawing lots of splashes around the ice cube
        ellipse(iceSplash.x, iceSplash.y, iceSplash.size * 3, iceSplash.size);
        ellipse(iceSplash.x, iceSplash.y, iceSplash.size * 5, iceSplash.size * 2);
        ellipse(iceSplash.x * 2, iceSplash.y / 2, iceSplash.size, iceSplash.size);
        ellipse(iceSplash.x / 2, iceSplash.y / 3, iceSplash.size, iceSplash.size);
        ellipse(iceSplash.x + 60, iceSplash.y - 20, iceSplash.size / 2, iceSplash.size);
        ellipse(iceSplash.x - 100, iceSplash.y - 20, iceSplash.size, iceSplash.size);

        // splashes on the left
        ellipse(iceSplash.x - 40, iceSplash.y - 25, iceSplash.size, iceSplash.size);
        ellipse(iceSplash.x - 65, iceSplash.y - 45, iceSplash.size / 2, iceSplash.size / 2);
        ellipse(iceSplash.x - 90, iceSplash.y - 15, iceSplash.size, iceSplash.size / 2);

        //splashes on the right
        ellipse(iceSplash.x + 40, iceSplash.y - 25, iceSplash.size, iceSplash.size);
        ellipse(iceSplash.x + 65, iceSplash.y - 45, iceSplash.size / 2, iceSplash.size / 2);
        ellipse(iceSplash.x + 90, iceSplash.y - 15, iceSplash.size, iceSplash.size / 2);

        // splashes on the cube
        ellipse(iceSplash.x - 25, iceSplash.y - 60, iceSplash.size / 2, iceSplash.size / 2);
        ellipse(iceSplash.x + 25, iceSplash.y - 70, iceSplash.size / 2, iceSplash.size / 2);
        ellipse(iceSplash.x + 5, iceSplash.y - 45, iceSplash.size / 2, iceSplash.size / 2);


    }
}


/**
 * Starting the ice cube falling activation and hidding the splash
 * Handel Keypress:
 * down arrow = DOWN_ARROW
 */
function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        iceCube.falling = true;  //Falling becomes true, so the ice cube starts moving down
        iceSplash.visible = false;  //the splash can't appear at the same time as the cube, it needs to be after 
    }
}