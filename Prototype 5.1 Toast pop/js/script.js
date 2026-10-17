/**
 * Morning toast 
 * Razan Elsaygh
 * 
 * When the user uses the mouse the toast pop out of the toaster. 
 */

"use strict";

//Constant for the toast animation
const toast = {
    // Position
    x: 215,
    y: 175,

    // Size
    width: 150,
    height: 150,
    speed: 5,

    // Speed when it pops
    velocity: {
        x: 0,
        y: 0
    },

    // Check if the toast has been activated 
    popped: false


};

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

    //Move the toast when it has been activated
    if (toast.popped === true) {
        toast.y += toast.velocity.y;

        //Stops the toast at a certain reaches so it would stay in the canvas
        if (toast.y <= 30) {      //to check if the toast has reached the max verticaly
            toast.y = 30;       //Stops the toast from going above it 
            toast.velocity.y = 0;
        }
    }


    //Drawing the toast that will when the mouse event is added
    push();
    fill('#F3D7A2');
    stroke('#cc946a');
    strokeWeight(5);
    rect(toast.x, toast.y, toast.width, toast.height, 20, 20, 20, 20);
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

    //Drawing the toaster handle
    push();
    fill('darkgrey');
    noStroke();
    rect(140, 260, 20, 10, 20, 20, 0, 0);
    pop();

}

/**
 * Creating the mouse function to make the animation of the toast with the mouse
*/
function mousePressed() {
    toast.popped = true;
    toast.velocity.y = -toast.speed;
}

