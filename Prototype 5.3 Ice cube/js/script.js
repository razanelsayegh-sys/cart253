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
    x: 175,
    y: 50,

    //size
    size: 50,

    //color
    fill: '#F0FAFF',

    //check if the ice cube is falling

    falling: false,

    //speed

    speed: 5

};

const iceSplash = {

    //position
    x: 200,
    y: 350,

    //size
    size: 20,

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
 * Drawing the background and adding the functions
*/
function draw() {
    background('#e39cae');

    //functions (in order)
    drawWater();
    drawIceCube();
    drawSplash();

    //Make the ice cube fall (use an if statement)

    if (iceCube.falling === true) {
        iceCube.y = iceCube.y + iceCube.speed; //If the ice cube is falling, how fast it moves

        //check if the ice cube touches the water
        if (iceCube.y + iceCube.size >= iceSplash.y) {
            iceCube.y = iceSplash.y - iceCube.size;   //Stop the ice cube at the surface of the water
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
    fill(drawIceCube.fill);
    stroke('#d5e9f3');
    strokeWeight(2);
    rect(iceCube.x, iceCube.y, iceCube.size, iceCube.size);
}

/**
 * Draw the splash
 */

function drawSplash() {
    if (iceSplash.visible === true) { //Draws the splash when it<s visible
        noFill();
        stroke(iceSplash.fill);
        strokeWeight(3);
        ellipse(iceSplash.x, iceSplash.y, iceSplash.size * 3, iceSplash.size);
        ellipse(iceSplash.x, iceSplash.y, iceSplash.size * 5, iceSplash.size * 2);
    }
}


}