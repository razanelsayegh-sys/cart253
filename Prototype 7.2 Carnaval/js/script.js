/**
 * Carnaval
 * Razan Elsaygh
 * 
 * Carnival booth with ballons, the user gets to pop the ballons 
 * by clicking on them and new ballons get added to the screen.
 */

"use strict";

/**
 * Variables for the ballons
 */
let balloons = [

    //ballon 1
    {
        x: 180,
        y: 220,
        size: 50,
        colour: "#E63946",
        visibility: true
    },

    //ballon 2
    {
        x: 270,
        y: 200,
        size: 50,
        colour: "#FFD166",
        visibility: true
    },

    //ballon 3
    {
        x: 420,
        y: 230,
        size: 55,
        colour: "#4361EE",
        visibility: true
    },

    //ballon 4
    {
        x: 320,
        y: 270,
        size: 50,
        colour: "#ee9e43",
        visibility: true
    }
];

//Game time 
let gameTime = 10 * 1000;

//Is the game over
let gameOver = false;

/**
 * Creating canvas
*/
function setup() {
    createCanvas(600, 500);

}


/**
 * Give the balloons a new random position inside the booth
    */
function resetBalloon(balloon) {

    //It changes the ballon position
    balloon.x = random(160, 440);
    balloon.y = random(270, 330);
}


/**
 * function that makes the balloons hide and reappear
 */
function hideAndReappear(balloon) {

    //Make the balloon invisible
    balloon.visibility = false;

    //Wait one second before reappearing
    setTimeout(function () {

        //Give the ballon a new random position
        resetBalloon(balloon);

        //Make the balloon visible again
        balloon.visibility = true;
    }, 1000);
}


/**
 * Creating the drawing
*/
function draw() {

    //Background colour
    background("#A8DADC");

    //functions called
    drawBooth();

    //Draw every Balloon in the array(loop and draws wach balloon automatically)
    for (let balloon of balloons) {
        if (balloon.visibility) {
            drawBalloon(balloon);
        }
    };

}


/**
 * Drawing the carnaval booth
 */
function drawBooth() {

    //Booth structure
    push();
    noStroke();
    fill("#e2c0a4");
    rect(50, 100, 500, 600);
    pop();

    //Booth roof
    push();
    noStroke();
    fill("#E63946");
    rect(20, 20, 560, 130, 20, 20);
    pop();

    //Stripes on the roof
    push();
    noStroke();
    fill("#F1FAEE");
    rect(70, 20, 40, 120);
    rect(170, 20, 40, 120);
    rect(275, 20, 40, 120);
    rect(370, 20, 40, 120);
    rect(475, 20, 40, 120);
    pop();

    //Counter
    push();
    noStroke();
    fill("#F1FAEE");
    rect(50, 350, 500, 140);
    pop();

    //Ground
    push();
    noStroke();
    fill("#457B9D");
    rect(0, 450, 600, 50);
    pop();

    //Front decoration
    push();
    fill("#E63946");
    textAlign(CENTER);
    textSize(30);
    text("CARNAVAL", 300, 420);
    pop();
}

/**
 * Drawing the ballons
 */

function drawBalloon(balloon) {

    //Ballon body
    push();
    noStroke();
    fill(balloon.colour);
    ellipse(balloon.x, balloon.y, balloon.size, balloon.size * 1.2);
    pop();

}



/**
 * Make balloons disappear and reappear when clicked
 */
function mousePressed() {

    let balloonClicked = false;

    // Check every balloon
    for (let balloon of balloons) {

        // Check if the mouse is close enough to the balloon
        if (balloon.visibility && !balloonClicked && dist(mouseX, mouseY, balloon.x, balloon.y) < balloon.size / 2) {

            // Make the balloon disappear and reappear
            hideAndReappear(balloon);

            balloonClicked = true;
        }
    }
}