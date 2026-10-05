/**
 * Jellyfish
 * Razan Elsaygh
 * 
 * This is a simple sketch of a 
 * jellyfish on the canvas. The jellyfish 
 * is an image drawn by me, in this drawing the lellyfish willl change
 * colors where depending on where the mouse is on the canvas.
 * 
 */

"use strict";

// Condition added to make the image change colors when the mouse is over the jellyfish image.
const Jellyfish = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000", // red to start
    fills: {
        noOverlap: "#ff0000", // red for no overlap
        overlap: "#00ff00" // green for overlap
    }
};
// Condition for the mouse of the user to be able to change the color of the jellyfish
//image when the mouse is over the jellyfish image.
const userMouse = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

// Adding the jellifish image to the canvas
let jellyfishImage;

function preload() {
    jellyfishImage = loadImage("assets/images/jellyfish.png");
}

/**
 * Creating canvas 
*/
function setup() {
    CreateCanvas(800, 600);
}


/**
 * Starting the animation of the jellyfish image and the color changing effect with the mouse
*/
function draw() {
    // Set the background color
    background("lightblue");

    //Adding the jellyfish image to the canvas
    image(jellyfishImage, Jellyfish.x, Jellyfish.y, Jellyfish.size, Jellyfish.size);

}