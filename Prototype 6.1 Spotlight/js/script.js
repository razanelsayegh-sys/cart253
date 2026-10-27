/**
 * Spotlight
 * Razan Elsaygh
 * 
 * The Foal is to create a theatre stage where the user moves a spoltlight 
 * with the mouse to find a hidden ghost before the timer end and the ghost
 * moves to a random position.
 */

"use strict";

/**
 * All the vaiables 
 */
//The ghost
let ghost = undefined;

//Check if the ghost is visible ot not
let ghostVisible = false;

//Check if the ghost is caught
let ghostCaught = false;

// How long is the game (in milliseconds)
let gameTimer = 10 * 1000; //10 seconds

//If the game is over yet
let gameOver = false;

//Current score of the player
let score = 0;


/**
 * Creating the Canvas
*/
function setup() {
    createCanvas(600, 400);

    //Calling the ghost variable createGhost() to create it 
    ghost = createGhost(80);  //80 is the Size of the ghost

    //Start the timer
    startGameOverTimer();
}
/**
 * Starts a timer that will end the game
 */
function startGameOverTimer() {
    setTimeout(endGame, gameTimer);
}

/**
 * Ends the game
 */
function endGame() {
    gameOver = true;
}



/**
 * Creating the drawing and it's animation
*/
function draw() {


    background("#2b234e");

    // Draw the curtains
    drawCurtains();
    drawScore();

    // If the game isn't over
    if (!gameOver) {

        // Draw the spotlight
        drawSpotlight(mouseX, mouseY, 180);

        // Check if the spotlight finds the ghost
        let overlap = dist(mouseX, mouseY, ghost.x, ghost.y);

        if (overlap < 50 && !ghostCaught) {
            ghostCaught = true;
            score++; //Add one point everytime the ghost is found
            ghostVisible = true;
            moveGhost(ghost); //To make the ghost move everytime the spotlight is on the ghost
        }

        //Reset when the spotlight is no longer near the ghost
        if (overlap >= 50) {
            ghostCaught = false;
        }

        // Draw the ghost only when it's visible
        if (ghostVisible) {
            drawGhost(ghost);
        }

    }

    // If the game is over
    else {
        drawGameOver();
    }
}



/**
 * Creates a ghost object with a random position and provided size
 * 
 */
function createGhost(size) {

    const ghost = {

        //Position to be random
        x: random(0, width),
        y: random(0, height),

        //Size
        size: size,

        colour: '#e5f2f7',

    };

    return ghost;  // sends the completed object back to the place wehre the function is called
}

/**
 * Makes the ghost run to a new position whenever it is caught
 */
function moveGhost(ghost) {

    ghost.x = random(50, width - 50);
    ghost.y = random(50, height - 50);
}



/**
 * Drawing the curtains of the theatre
 */
function drawCurtains() {

    //Drawing the curtain on the left
    push();
    fill("red");
    stroke("darkred");
    strokeWeight(2);
    triangle(0, 250, 0, 600, 150, 490);
    ellipse(0, 0, 320, 620);
    pop();

    //Drawing the curtains line on the left
    push();
    noFill();
    stroke("darkred");
    strokeWeight(2);
    ellipse(0, 0, 320, 520);
    ellipse(0, 0, 220, 520);
    ellipse(0, 0, 220, 450);
    ellipse(0, 0, 120, 420);
    ellipse(0, 0, 100, 220);
    pop();

    //Drawing the curtains on the right
    push();
    fill("red");
    stroke("darkred");
    strokeWeight(2);
    triangle(600, 250, 600, 600, 450, 490);
    ellipse(600, 0, 320, 620);
    pop();

    //Drawing the curtains line on the right
    push();
    noFill();
    stroke("darkred");
    strokeWeight(2);
    ellipse(600, 0, 320, 520);
    ellipse(600, 0, 220, 520);
    ellipse(600, 0, 220, 450);
    ellipse(600, 0, 120, 420);
    ellipse(600, 0, 100, 220);
    pop();
}

/**
 * Drawing the ghost
 */
function drawGhost(ghost) {

    // Body of the ghost
    push();
    noStroke();
    fill(ghost.colour);
    ellipse(ghost.x, ghost.y, ghost.size);
    rect(ghost.x - ghost.size / 2, ghost.y, ghost.size, ghost.size / 2);

    //Wavy bottom
    ellipse(ghost.x - 25, ghost.y + 35, 30, 25);
    ellipse(ghost.x, ghost.y + 35, 30, 25);
    ellipse(ghost.x + 25, ghost.y + 35, 30, 25)
    pop();

    //Eyes of the puppet
    push();
    fill('white');
    ellipse(ghost.x - 10, ghost.y - 5, 16);
    ellipse(ghost.x + 10, ghost.y - 5, 16);
    pop();

    push();
    fill("#30251d");
    ellipse(ghost.x - 8, ghost.y - 3, 5);
    ellipse(ghost.x + 8, ghost.y - 3, 5);
    pop();


    //Drawing the Mouth
    push();
    fill("#4a1428");
    ellipse(ghost.x, ghost.y + 12, 5, 5);
    pop();

    //Pink cheeks
    push();
    fill("#ffb3c6");
    noStroke();
    ellipse(ghost.x - 27, ghost.y + 12, 12, 7);
    ellipse(ghost.x + 27, ghost.y + 12, 12, 7);
    pop();


}

/**
 * Drawing the spotlight
 */
function drawSpotlight(x, y, size) {

    //Drawing the spotlight

    push();
    fill("#f7f4f5b1");
    noStroke();
    ellipse(x, y, 100);
    pop();
}

/**
 * Displays the players score
 */

function drawScore() {
    push();
    fill("white");
    noStroke();
    textSize(20);
    textAlign(LEFT, TOP);
    text('Score:' + score, 20, 20);
    pop();
}

/**
 * Displaythe game is over message
 */
function drawGameOver() {
    push();
    fill("white");
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Oh so close!", width / 2, height / 2);
    pop();
}