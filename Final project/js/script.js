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

    //Using sin to add a foalt effect to my avatar
    let floatOffset = sin(frameCount * 0.05) * 3;

    //Called the variable in the ellipse and added it to the y position of the avatar
    //to makethe foalt effect move vertically
    ellipse(avatar.x, avatar.y + floatOffset, avatar.size, avatar.size);
    pop();
}


/**
 * Moving the avatar
 */

function moveAvatar() {

    //Running movement (horizontal movement)
    if (avatar.run) {

        //increases the avatar horizontal position by its speed
        avatar.x += avatar.Speed;
    }

    //Checking if the avatar is on a building
    if (avatar.onGround && !avatar.jump) {

        let onBuilding = false;

        //Building 1
        if (avatar.y === 315 && avatar.x + 15 > 10 && avatar.x - 15 < 150) {
            onBuilding = true;
        }

        //Building 2
        else if (avatar.y === 375 && avatar.x + 15 > 250 && avatar.x - 15 < 385) {
            onBuilding = true;
        }

        //Building 3
        else if (avatar.y === 315 && avatar.x + 15 > 480 && avatar.x - 15 < 650) {
            onBuilding = true;
        }

        //Building 4
        else if (avatar.y === 275 && avatar.x + 15 > 720 && avatar.x - 15 < 870) {
            onBuilding = true;
        }

        //Building 5
        else if (avatar.y === 315 && avatar.x + 15 > 620 && avatar.x - 15 < 1000) {
            onBuilding = true;
        }

        //Checks if the avatar is no longer in the building then the avatar falls
        if (!onBuilding) {
            avatar.onGround = false;
        }
    }

    //to know the Avatar's previous position before it moved 
    let previousBottom = avatar.y + avatar.size / 2

    //Jumping movement (upwards movement) and falling movement
    if (avatar.jump || !avatar.onGround) {
        avatar.y += avatar.velocityY;   //move the avatar vertically
        avatar.velocityY += avatar.gravity;  //to slow the upward movement


        //Checking if the avatar is falling
        if (avatar.velocityY >= 0) {

            //Calculate the current bottom edge of the avatar after moving vertically
            let currentBottom = avatar.y + avatar.size / 2;

            //checks whether the avatar has reached the rooftop(x) and if the avatar is falling through the rooftop(y)
            //Building 1(medium)
            if (avatar.x >= 10 && avatar.x - 15 <= 150 && previousBottom <= 330 && currentBottom >= 330) {
                avatar.y = 315;
                avatar.velocityY = 0;
                avatar.jump = false; //allow the player to jump again after landing
                avatar.onGround = true; //to dectect when the avatar isn,t on the building
            }

            //Same thing but to each building
            //Building 2(medium)
            else if (avatar.x >= 250 && avatar.x - 15 <= 385 && previousBottom <= 390 && currentBottom >= 390) {
                avatar.y = 375;
                avatar.velocityY = 0;
                avatar.jump = false;
                avatar.onGround = true;
            }

            //Building 3(medium)
            else if (avatar.x >= 480 && avatar.x - 15 <= 650 && previousBottom <= 330 && currentBottom >= 330) {
                avatar.y = 315;
                avatar.velocityY = 0;
                avatar.jump = false;
                avatar.onGround = true;
            }

            // Building 4(medium)
            else if (avatar.x >= 720 && avatar.x - 15 <= 870 && previousBottom <= 290 && currentBottom >= 290) {
                avatar.y = 275;
                avatar.velocityY = 0;
                avatar.jump = false;
                avatar.onGround = true;
            }

            //Building 5(medium)
            else if (avatar.x >= 920 && avatar.x - 15 <= 1000 && previousBottom <= 330 && currentBottom >= 330) {
                avatar.y = 315;
                avatar.velocityY = 0;
                avatar.jump = false;
                avatar.onGround = true;
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

/**
 * To stop the avatar from running without pressing the key
 */
function keyReleased() {


    avatar.run = false;

}



/**
 * Function to check the game canvas end 
 */

function checkGameOver() {
    if (avatar.x > width + avatar.size / 2) {
        gameOver = true;
    }

    //Checking if the avatar falls below the canvas
    else if (avatar.y - avatar.size / 2 > height) {
        gameOver = true;
    }
}


/**Game oover function to display the message */
function drawGameOver() {


    push();

    //Transparent background
    noStroke();
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    //the text variables
    fill('white');
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(80);
    text("Game Over", width / 2, height / 2);

    pop();
}
