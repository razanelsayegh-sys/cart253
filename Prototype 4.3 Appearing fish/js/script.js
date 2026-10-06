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

    //Starting the animation process
    if (state === "title") {
        title();
    } else if (state === "animation") {
        animation();
    } else if (state === "ending") {
        endingScreen();
    }

    // adding background details
    push();
    fill("#dcbb78");
    noStroke();
    rect(0, 500, 600, 200);
    pop();

    //adding a home to the fish (coral)
    push();
    fill("#ff6b6b");
    noStroke();
    rect(570, 350, 25, 150);
    ellipse(570, 350, 40, 40);
    ellipse(550, 390, 40, 40);
    ellipse(590, 420, 40, 40);
    ellipse(595, 350, 15, 15);
    ellipse(560, 420, 20, 20);
    ellipse(560, 450, 40, 40);
    ellipse(530, 390, 15, 15);
    ellipse(565, 480, 20, 20);
    pop();

    push();
    fill("#df4e4e");
    noStroke();
    ellipse(590, 450, 40, 40);
    ellipse(540, 350, 30, 30);
    ellipse(565, 400, 25, 25);
    ellipse(590, 370, 45, 45);
    pop();

    push();
    fill("#ee8888");
    noStroke();
    ellipse(595, 470, 10, 10);
    ellipse(590, 430, 15, 15);
    ellipse(550, 370, 17, 17);
    ellipse(560, 400, 5, 5);
    ellipse(590, 345, 15, 15);
    pop();
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




