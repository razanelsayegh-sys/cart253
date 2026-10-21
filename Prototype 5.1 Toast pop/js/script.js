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
    popped: false,

    down: false
};


/**
 * Creating the canvas
*/
function setup() {
    createCanvas(600, 400);
}


/**
 * Creating function for diffrent part of the animation
*/
function draw() {

    //drawing the background
    background('yellow');

    //function created to make the drawing in order
    drawFumes();
    drawToast();
    drawToaster();



}
/**
 * Making fumes on top of the toast
 */
function drawFumes() {
    // Added fumes 
    push();
    fill(255, 255, 255, 160); //fourth number for the transparency
    noStroke();
    //Right
    ellipse(250, 100, 20, 120);   //Main big ellipes
    //Middel
    ellipse(300, 100, 20, 120);
    //Left
    ellipse(330, 100, 20, 120);
    pop();

    //These are hidening part of the top ellipses to make give them a curve effect
    push();
    fill('yellow');
    noStroke();
    ellipse(260, 70, 20, 50);
    ellipse(290, 140, 10, 50);
    ellipse(275, 100, 40, 70);
    ellipse(240, 120, 20, 90);
    ellipse(315, 100, 30, 90);
    ellipse(305, 105, 10, 90);
    ellipse(325, 140, 10, 50);
    ellipse(340, 60, 15, 70);
    ellipse(350, 140, 30, 50);
    pop();



}

/**
 * drawing the toast and it's animation
 */
function drawToast() {

    //Move the toast when it has been activated
    if (toast.popped === true) {
        toast.y += toast.velocity.y;

        //Stops the toast at a certain reaches so it would stay in the canvas
        if (toast.y <= 30 && toast.down === false) {       //to check if the toast has reached the max verticaly (y axis)
            toast.y = 30;          //Stops the toast from going above it 
            toast.velocity.y = 0;
        }

        //stops the toast when it returns inside
        if (toast.y >= 175 && toast.down === true) {
            toast.y = 175;
            toast.velocity.y = 0;
            toast.down = false;
        }
    }

    //Drawing the toast that will when the mouse event is added
    push();
    // Toast features
    fill('#F3D7A2');
    stroke('#cc946a');
    strokeWeight(5);

    //Toast dimension
    rect(toast.x, toast.y, toast.width, toast.height, 20, 20, 20, 20);
    pop();
}


/**
 * Adding the background color and making the static objects of 
 * the drawing such as the toaster
*/
function drawToaster() {

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

    //added toaster top reflection
    push();
    noFill();
    stroke('#ffffff');
    strokeWeight(2);
    rect(190, 220, 200, 130, 20, 20, 20, 20);
    pop();

}




/**
* Creating the mouse function to make the animation of the toast with the mouse
*/
function mousePressed() {

    //first click: pop the toast up
    if (toast.popped === false) {
        toast.popped = true;
        toast.velocity.y = -toast.speed;
    }

    //second click the toast is sent back down 
    else if (toast.y <= 30 && toast.down === false) {
        toast.down = true;
        toast.velocity.y = toast.speed;
    }
}

