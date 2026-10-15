/**
 * Keyboard Events
 * Pippin Barr
 * 
 * A chance to experiment with keyboard events in a simple setting.
*/

"use strict";

// Our ball
const ball = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 100,
    // fill
    fill: "#ffffff",
    // fills
    fills: {
        white: "#ffffff",
        red: "#ff0000",
        blue: "#0000ff"
    }
}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draws the ball
 */
function draw() {
    background(0);

    // Draw the ball
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

/**
 * This is the normal way/ the easy way
 */

/**
 * Change the colour of the ball
 */
//function keyPressed() {
// ball.fill = ball.fills.red;
//}

/**
 * Reset the colour of the ball
 */
//function keyReleased() {
//ball.fill = ball.fills.white;
//}


/**
 * This is the event way to specify a key that when 
 * it's pressed it will change colour with one or two keys
 */

//Handel keypress:
// - r= make the ball red
// - b= make the ball blue

function keyPressed(event) {
    if (event.key === "r") {
        ball.fill = ball.fills.red;
    }
    else if (event.key === "b") {
        ball.fill = ball.fills.blue;
    }
}


//Handel keyReleased:
//- r or b = Set the ball back to default

function keyReleased(event) {
    if (event.key === "r" || event.key === "b") {
        ball.fill = ball.fills.white;
    }
}


/**
 * Something that could be annoying with the version abouve is that if you press
 * "R" instead of"r" it won't work cause they are not the same.
 * 
 * In this case it's bettre to use "event.keyCode" instead of "event.key"
 * cause it doesn't care about the capitalization.
 * 
 * So to do that we need the key code of R(and r) which is = 82 
 * And the key code of B(and b) which is 66.
 * 
 * It harder cause we don't have the entire ASCII key code table memorized
 * that why comments help but also  you could check online. 
 * 
 * Here is how to do it : 
 */


//Hangel Keypress:
// - R = make the ball red
// - B = make the ball blue

function keyPressed(event) {
    if (event.keyCode === 82) {
        ball.fill = ball.fills.red;
    }
    else if (event.keyCode === 66) {
        ball.fill = ball.fills.blue;
    }
}

//Handel keyReleased:
// - R or B = Set the ball back to default 

function keyReleased(event) {
    if (event.keyCode === 82 || event.keyCode === 66) {
        ball.fill = ball.fills.white;
    }
}

/**
 * Side note and IMPORTANT: you could store your Key codes in a variable or property
 * to controle the ball's colour so we don't have to remember the numbers all. 
 * Have them written like this in the variable/ const part at the top: 
 * 
 * Keys that control the ball's colour
  keys: {
    redKey: 82, // R
        //blueKey: 66 // B
 }

 * then instead of writting the key code like in the top, you can just use 
 * the identifier that you wrote at the top to make it easier and less confusing
 */
