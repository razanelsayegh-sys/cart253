/**
 * Mask
 * Razan Elsaygh
 * 
 * Creat a game where the users use its mouse to collect diffrent masks 
 * in random position in a certain time as much as possible.
 */

"use strict";

//Variable and constant

//Background colour
const backgroundColour = "#242044";

//Current score
let score = 0;

//First mask
const maskOne = {
    x: undefined,  //They will get their position in setup then in the resetMask function
    y: undefined,
    size: 60,
    fill: "#ff9ed2"
};

//Second mask
const maskTwo = {
    x: undefined,
    y: undefined,
    size: 60,
    fill: "#ffd84d"
};

//Third mask
const maskThree = {
    x: undefined,
    y: undefined,
    size: 60,
    fill: "#8be9fd"
}

//How long the game will last, in milliseconds
let gameTime = 10 * 1000;

//Is the game over
let gameOver = false;

/**
 * Creating canvas
*/
function setup() {
    createCanvas(600, 400);

    //Reset the masks to put it in a random place
    resetMask(maskOne);
    resetMask(maskTwo);
    resetMask(maskThree);

    //Start the timer for the game to be over
    startGameOverTimer();
}

/**
 * Position of the masks randomly on the canvas, making sure they don't overlap
 * 
 */
function resetMask() {
    mask.x = random(mask.size / 2, width - mask.size / 2);
    mask.y = random(mask.size / 2, height - mask.size / 2);
}

/**
 * Start the timer
 */
function startGameOverTimer() {
    setTimeout(endGame, gameTime);
}

/**
 * End the game
 */
function endGame() {
    gameOver = true;
}


/**
 * Drawing the scene
*/
function draw() {
    background(backgroundColour);
}

/**
 *Drawing the mask
 */
function drawMask(mask) {

    //Drawing the mask face
    push();
    fill(mask.fill);
    noStroke();
    ellipse(mask.x, mask.y, mask.size, mask.size * 1.2);
    pop();

    //Drawing the eyes
    push();
    fill("#242044");
    ellipse(mask.x - 12, mask.y - 8, 8, 12);
    ellipse(mask.x + 12, mask.y - 8, 8, 12);
    pop();

    //Drawing the mouth
    push();
    noFill();
    stroke("#242044");
    strokeWeight(3);
    arc(mask.x, mask.y + 12, 22, 12, 0, PI);
    pop();

}