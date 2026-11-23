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
};

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

    //City buildings
    drawSkyline();
    drawlights();
    drawmoon();
    drawStars();

    //Avatar
    drawAvatar();

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
    rect(520, 330, 150, 350);
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
    rect(535, 350, 30, 30);
    rect(620, 430, 30, 30);
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