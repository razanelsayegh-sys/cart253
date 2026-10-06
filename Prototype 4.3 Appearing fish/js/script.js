/**
 * A Fish Going Home
 * Razan Elsaygh
 * 
 * This is an animation of a fish going home. 
 * This animation will start everytime the page is refreshed.
 */

"use strict";

// Fish image as an object
let fish = {
    x: 0,    //left/right position
    y: 350,  // up/down position
    size: 500, // Size of the fish image
    image: undefined,
    velocity: {
        x: 0,
        y: 0
    },
    speed: 2,
};

//Text to display on the screen(title/ ending)
let titleText = "A Fish Going Home";
let endingText = "The fish made it home!";

// Display the title when the program starts
let state = "title";

/**
 * Loading the fish image to the canvas 
 */
async function preload() {
    fish.image = await loadImage("assets/images/fish.png");
}


/**
 * Creating Canvas
*/
async function setup() {
    createCanvas(600, 600);
    await preload();

    //text properties for the title and ending text
    textSize(32);
    textAlign(CENTER, CENTER);


}


/**
 * Drawing the animation loop with the fish moving
*/
function draw() {
    if (state === "title") {
        title();
    } else if (state === "animation") {
        animation();
    } else if (state === "ending") {
        endingScreen();
    }
}

/**
 * Title state appearing first when the program starts
 */
function title() {
    background(0, 100, 200);
    fill(255);
    text(titleText, width / 2, height / 2);

    // Change to the animation state when the mouse is pressed
    if (mouseIsPressed) {
        state = "animation";
        fish.velocity.x = fish.speed;
    }
}

/**
* Second part of the animation where the fish is moving to the right side of the canvas
*/
function animation() {
    background("#1a3d5c"); // Blue background

    //Conditionals:fish swims faster when mouse is pressed
    let d = dist(mouseX, mouseY, fish.x, fish.y);
    if (d < 150) {
        fish.velocity.x = fish.speed * 2;
    } else {
        fish.velocity.x = fish.speed;
    }

    // Update the fish's position based on its velocity
    fish.x += fish.velocity.x;

    //Fish image drawn on the canvas
    push();
    imageMode(CENTER);
    image(fish.image, fish.x, fish.y, fish.size, fish.size);
    pop();

    //check point if the fish has reached the right side of the canvas (home)
    if (fish.x > width) {
        state = "ending";
    }
}
/**
* Ending state where the fish has reached home and the ending text is displayed
*/
function endingScreen() {
    background(0, 100, 200);
    fill(255);
    text(endingText, width / 2, height / 2);
}




