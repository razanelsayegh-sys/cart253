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
    x: undefined,
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

}


/**
 * Creating canvas
*/
function setup() {
    createCanvas(600, 400);
}


/**
 * Drawing the scene
*/
function draw() {
    background("#242044");
}