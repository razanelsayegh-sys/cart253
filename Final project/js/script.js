/**
 * Jump throught the buildings
 * Razan Elsaygh
 * 
 * It's a game of a character that runs continuously on top of the 
 * city buildings. The game would change asthetics as long as the players is still in the game
 * and harder.
 */

"use strict";

/**
 * Coordinates of the avatar
 */

let avatar = {
    x: 30,
    y: 310,
    size: 30,
    color: 'rgb(191, 234, 107)',

    //MOUVEMENT VARIABLES
    velocityY: 0,

    //run variables
    run: false,
    Speed: 2.5,

    //jumping variables
    jump: false,
    gravity: 0.6,
    jumpForce: - 12,

    onGround: true,

};

/**Variable for Game Over message */
let gameOver = false;



/**
 * Creating the canvas 
 */
function setup() {
    createCanvas(1000, 600);
}

/**
 * Calling the functions in draw
 */

function draw() {
    drawBackground();

    //City buildings(in order)
    drawSkyline();
    drawlights();
    drawmoon();
    drawStars();

    //Avatar + Game Over condition to activate

    if (!gameOver) {//if the game isn't over make the avatar move 
        moveAvatar();
        checkGameOver();
        drawAvatar();
    }
    else {
        drawAvatar();
        drawGameOver();
    }

}


/**
 * Drawing the background of the canvas
 */
function drawBackground() {
    background("darkblue");
}

/**
 * Draw the skyline of the city outside the window
 */
function drawSkyline() {


    // Draw the city buildings(tall height)
    push();
    noStroke();
    fill('#462e2e');
    rect(170, 410, 80, 190);
    rect(440, 430, 80, 170);
    rect(670, 420, 50, 180);
    rect(870, 445, 55, 155);
    pop();

    // Draw the city buildings(short height)
    push();
    noStroke();
    fill('#372020');
    rect(150, 500, 80, 100);
    rect(380, 450, 80, 160);
    rect(650, 500, 80, 100);
    pop();

    // Draw the city buildings(medium height)
    push();
    noStroke();
    fill('#bf9f6c');
    rect(10, 330, 140, 300);
    rect(250, 390, 135, 370);
    rect(480, 330, 170, 350);
    rect(720, 290, 150, 350);
    rect(920, 330, 160, 350);
    pop();
}

/**
 * Drawing the house windos
 */
function drawlights() {
    // Draw the lights in the buildings
    push();
    noStroke();
    fill('#fae96d');

    // lights in the medium height buildings
    //lights medium building 1
    rect(30, 350, 30, 30);
    rect(100, 400, 30, 30);
    //lights medium building 2
    rect(280, 420, 30, 30);
    rect(330, 450, 30, 30);
    //lights medium building 3
    rect(505, 350, 30, 30);
    rect(600, 430, 30, 30);
    //lights medium building 4
    rect(740, 320, 30, 30);
    rect(820, 370, 30, 30);
    rect(780, 430, 30, 30);
    //lights medium building 5
    rect(940, 370, 30, 30);
    rect(990, 410, 30, 30);
    pop();


}

/**
 * Drawing the moon
 */
function drawmoon() {
    // Draw the moon
    push();
    fill('#fffdfdd7');
    noStroke();
    ellipse(890, 100, 60, 60);
    pop();
}

/**
 * drawing the stars
 */
function drawStars() {
    // Draw the stars
    push();
    fill('white');
    noStroke();
    ellipse(100, 100, 5, 5);
    ellipse(200, 150, 5, 5);
    ellipse(300, 80, 5, 5);
    ellipse(400, 130, 5, 5);
    ellipse(550, 90, 5, 5);
    ellipse(600, 150, 5, 5);
    ellipse(700, 100, 5, 5);
    pop();
}


/**
 * drawing the avatar
 */
function drawAvatar() {

    push();
    noStroke();
    fill(avatar.color);
    ellipse(avatar.x, avatar.y, avatar.size, avatar.size);
    pop();
}


/**
 * Moving the avatar
 */

function moveAvatar() {

    //Running movement (horizontal movement)
    if (avatar.run) {

        //
        avatar.x += avatar.Speed;
    }


    //Jumping movement (upwards movement)
    if (avatar.jump) {
        avatar.y += avatar.velocityY;   //move the avatar vertically
        avatar.velocityY += avatar.gravity;  //to slow the upward movement


        //Checking if the avatar is falling
        if (avatar.velocityY >= 0) {

            //checks whether the avatar has reached the rooftop(y) and the horizontal position(x)
            //Building 1(medium)
            if (avatar.x >= 10 && avatar.x <= 150 && avatar.y >= 315) {
                avatar.y = 315;
                avatar.velocityY = 0;
                avatar.jump = false; //allow the player to jump again after landing
            }

            //Same thing but to each building
            //Building 2(medium)
            else if (avatar.x >= 250 && avatar.x <= 385 && avatar.y >= 375) {
                avatar.y = 375;
                avatar.velocityY = 0;
                avatar.jump = false;
            }

            //Building 3(medium)
            else if (avatar.x >= 480 && avatar.x <= 650 && avatar.y >= 315) {
                avatar.y = 315;
                avatar.velocityY = 0;
                avatar.jump = false;
            }

            // Building 4(medium)
            else if (avatar.x >= 720 && avatar.x <= 870 && avatar.y >= 275) {
                avatar.y = 275;
                avatar.velocityY = 0;
                avatar.jump = false;
            }

            //Building 5(medium)
            else if (avatar.x >= 920 && avatar.x <= 1000 && avatar.y >= 315) {
                avatar.y = 315;
                avatar.velocityY = 0;
                avatar.jump = false;
            }
        }

    }
}



/**
 * Key function to make the avatar controled by the player
 * Handel Keypress:
 * right arrow = RIGHT_ARROW (to go forward)
 * up arraow = UP_ARROW (to jump)
 */
function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        avatar.run = true;
    }

    else if (keyCode === UP_ARROW && !avatar.jump) {
        avatar.jump = true;
        avatar.onGround = false;
        avatar.velocityY = avatar.jumpForce;
    }
}



/**Function to check the game canvas end */
function checkGameOver() {
    if (avatar.x > width + avatar.size / 2) {
        gameOver = true;
    }
}


/**Game oover function to display the message */
function drawGameOver() {

    push();
    fill('white');
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(80);
    text("Game Over", width / 2, height / 2);
    pop();
}
