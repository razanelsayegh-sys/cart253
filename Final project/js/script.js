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

let buildingSpeed = 3.5

let buildings = [
    /**Buildings array */
    //Building 1
    { x: 10, y: 330, w: 140, h: 300, Wd: [{ x: 20, y: 20 }, { x: 90, y: 70 }] },
    //Building 2
    { x: 250, y: 390, w: 135, h: 370, Wd: [{ x: 30, y: 30 }, { x: 80, y: 60 }] },
    //Building 3 
    { x: 480, y: 330, w: 170, h: 350, Wd: [{ x: 25, y: 20 }, { x: 120, y: 100 }] },
    //Building 4
    { x: 720, y: 290, w: 150, h: 350, Wd: [{ x: 20, y: 30 }, { x: 100, y: 80 }, { x: 60, y: 140 }] },
    //Building 5
    { x: 920, y: 330, w: 160, h: 350, Wd: [{ x: 20, y: 40 }, { x: 70, y: 80 }] }
];





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
    moveBuildings();
    drawMoon();
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
    //Using loop/Arrays
    push();
    noStroke();

    //Repeats this for every building that is stored in the array variable
    for (let building of buildings) {

        //Drawing the building
        fill('#bf9f6c');
        rect(building.x, building.y, building.w, building.h);

        //Drawing the windows
        fill('#fae96d');
        for (let window of building.Wd) {
            rect(building.x + window.x, building.y + window.y, 30, 30);
        }
    }


    pop();
}

/**
 * Moving the buildings(loop)
 */
function moveBuildings() {

    //Moving the buildings to the left
    if (avatar.run) {
        for (let building of buildings) {
            building.x -= buildingSpeed;
        }
    }

    //Checking if the building has left the canvas
    for (let building of buildings) {
        if (building.x + building.w < 0) {
            let rightEdge = 0;

            //Finding the last building on the right
            for (let otherBuilding of buildings) {
                if (otherBuilding.x + otherBuilding.w > rightEdge) {
                    rightEdge = otherBuilding.x + otherBuilding.w;
                }
            }

            //Moving the building to the right
            building.x = rightEdge + 70;
        }
    }

}

//  * Drawing the house windwos

/**
 * Drawing the moon
 */
function drawMoon() {
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

    //Running movement to check if the avatar is Jumping and on the building roof 
    //using a loop
    if (avatar.onGround && !avatar.jump) {

        //Variable roof building
        let onRoof = false;

        for (let building of buildings) {

            if (avatar.y === building.y - avatar.size / 2 &&
                //building.x adjusts the building position according to the buildings movement
                avatar.x + avatar.size / 2 > building.x &&
                avatar.x - avatar.size / 2 < building.x + building.w) {
                onRoof = true;
            }
        }

        //Checks if the avatar is no longer in the building then the avatar falls
        if (!onRoof) {
            avatar.onGround = false;
        }
    }

    //to know the Avatar's previous position before it moved 
    let previousBottom = avatar.y + avatar.size / 2

    //Apply gravity and move the avatar
    avatar.velocityY += avatar.gravity;
    avatar.y += avatar.velocityY;

    //Varaible for the bottom of the canvas
    let currentBottom = avatar.y + avatar.size / 2;

    //Checking if the avatar is falling
    for (let building of buildings) {
        if (avatar.x + avatar.size / 2 > building.x &&
            avatar.x - avatar.size / 2 < building.x + building.w &&
            previousBottom <= building.y &&
            currentBottom >= building.y) {

            avatar.y = building.y - avatar.size / 2;
            avatar.velocityY = 0;
            avatar.jump = false;
            avatar.onGround = true;

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
