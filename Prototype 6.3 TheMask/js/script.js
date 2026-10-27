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
    fill: "#D4A017",
    expression: "happy",
    visibility: true
};

//Second mask
const maskTwo = {
    x: undefined,
    y: undefined,
    size: 60,
    fill: "#ac2fd2",
    expression: "sad",
    visibility: true
};

//Third mask
const maskThree = {
    x: undefined,
    y: undefined,
    size: 60,
    fill: "#2541B2",
    expression: "surprised",
    visibility: true
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
function resetMask(mask) { //To all the masks
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
 * To make the masks disappear after a certain time of not being clicked on
 */
function hideAndReappear(mask) {
    mask.visibility = false;  //tells the program that the mask shouldn't be drawn on the canvas

    //adding a timeout to make the masks disappear after a certain time
    setTimeout(function () {    // To wait for a certain time before disappearing 
        resetMask(mask);    // mask reapears
        mask.visibility = true;  //Now it's visible
    }, 1000); //1 seconds
}


/**
 * Drawing the scene
*/
function draw() {
    background(backgroundColour);

    //Function(to always display it)
    drawCurtain();
    drawScore();


    //Condition: if the game isn't over, draw the current mask
    if (!gameOver) {

        if (maskOne.visibility) {
            drawMask(maskOne);
        }

        if (maskTwo.visibility) {
            drawMask(maskTwo);
        }

        if (maskThree.visibility) {
            drawMask(maskThree);
        }

    }
    //Else, display the message of 'game over'
    else {
        drawGameOver();
    }
}


/**
 * To display the score of the player
 */

function drawScore() {

    push();
    fill("#6ac5ed");
    textSize(64);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text(score, 20, 20);
    pop();
}


/**
 * Drawing a curtain in the background of the drawing
 */
function drawCurtain() {

    //Drawing the main part of the top curtain
    push();
    fill("#7A1E1E");
    stroke("darkred");
    strokeWeight(2);
    ellipse(325, 0, 920, 520);
    pop();

    //Drawing the curtain lines
    push();
    noFill();
    stroke("darkred");
    strokeWeight(3);
    ellipse(325, 50, 920, 320);
    ellipse(425, 50, 920, 220);
    ellipse(225, 20, 920, 150);
    pop();
}


/**
 * To display the 'game over' message
 */
function drawGameOver() {

    push();
    fill("#6ac5ed");
    noStroke();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    pop();
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

    //Adding condition to the facial expression of the masks
    //Mask expression happy
    if (mask.expression === "happy") {
        //happy simle
        arc(mask.x, mask.y + 12, 22, 15, 0, PI);
    }

    //Mask expression sad
    else if (mask.expression === "sad") {
        //happy sad
        arc(mask.x, mask.y + 22, 22, 15, PI, TWO_PI);
    }

    //Mask expression surprised
    else if (mask.expression === "surprised") {
        //happy surprised
        ellipse(mask.x, mask.y + 15, 10, 10);
    }


    pop();

}


/**
 * Collect the mask when clicked with the mouse function
 */

function mousePressed() {
    //Check mask clicks it the game isn't over yet
    if (!gameOver) {

        //Check if the mask (first) is clicked
        const dOne = dist(mouseX, mouseY, maskOne.x, maskOne.y);

        if (maskOne.visibility && dOne < maskOne.size / 2) {
            score++;
            hideAndReappear(maskOne);
        }

        //Check if the second mask is clicked
        const dTwo = dist(mouseX, mouseY, maskTwo.x, maskTwo.y);

        if (maskTwo.visibility && dTwo < maskTwo.size / 2) {
            score++;
            hideAndReappear(maskTwo);
        }

        //Check if mask three is clicked
        const dThree = dist(mouseX, mouseY, maskThree.x, maskThree.y);

        if (maskThree.visibility && dThree < maskThree.size / 2) {
            score++;
            hideAndReappear(maskThree);
        }


    }
}