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
    fill: "#D4AF37",
    expression: "happy"
};

//Second mask
const maskTwo = {
    x: undefined,
    y: undefined,
    size: 60,
    fill: "#8B1E3F",
    expression: "sad"
};

//Third mask
const maskThree = {
    x: undefined,
    y: undefined,
    size: 60,
    fill: "#0F8B8D",
    expression: ""
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
 * Drawing the scene
*/
function draw() {
    background(backgroundColour);

    //Function(to always display it)
    drawScore();

    //Condition: if the game isn't over, draw thhe curent mask)
    if (!gameOver) {
        drawMask(maskOne);
        drawMask(maskTwo);
        drawMask(maskThree);
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
    textAlign(screenLeft, TOP);
    text(score, 20, 20);
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
        arc(mask.x, mask.y + 15, 10, 14);
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

        if (dOne < maskOne.size / 2) {
            score++;
            resetMask(maskOne);
        }

        //Check if the second mask is clicked
        const dTwo = dist(mouseX, mouseY, maskTwo.x, maskTwo.y);

        if (dTwo < maskTwo.size / 2) {
            score++;
            resetMask(maskTwo);
        }

        //Check if mask three is clicked
        const dThree = dist(mouseX, mouseY, maskThree.x, maskThree.y);

        if (dThree < maskThree.size / 2) {
            score++;
            resetMask(maskThree);
        }


    }
}