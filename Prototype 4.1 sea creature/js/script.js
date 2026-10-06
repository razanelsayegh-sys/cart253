/**
 * Jellyfish
 * Razan Elsaygh
 * 
 * This is a simple sketch of a 
 * jellyfish on the canvas. The jellyfish 
 * is an image drawn by me, in this drawing the jellyfish will change
 * colors depending on where the mouse is on the canvas. This drawing symbolizes
 * the memories that are being replaced by new ones, and the jellyfish is a 
 * symbol of the new memorie that is replacing the old ones.
 * 
 */

"use strict";

// Condition added to make the image change when the mouse is over the jellyfish image.
const Jellyfish = {
    x: 200,
    y: 400,
    size: 300,
    tint: {
        noOverlap: 0, // no overlap with the mouse
        overlap: 230 // overlap with the mouse, it's semi visible
    }
};


// Condition for the mouse of the user to be able to change the color of the jellyfish
//image when the mouse is over the jellyfish image.

const userMouse = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 25,
    fill: "#f8ee31"
};

let jellyfishTint = 200;

// Adding the jellifish images to the canvas(part1)
let jellyfishImage1 = {
    //position of the image on the canvas
    x: 170,
    y: 150,
    size: 330,

    //The image of the jellyfish will be loaded in the preload function below
    image2: undefined
};

let jellyfishImage2 = {
    //position of the image on the canvas
    x: 300,
    y: 330,
    size: 750,

    //The image of the jellyfish will be loaded in the preload function below
    image2: undefined
};
let jellyfishImage3 = {
    //position of the image on the canvas
    x: 490,
    y: 520,
    size: 450,

    //The image of the jellyfish will be loaded in the preload function below
    image3: undefined
};

async function preload() {
    //Loading the jellyfish image to the canvas
    jellyfishImage1.image2 = await loadImage("assets/images/jellyfish1.png");
    jellyfishImage2.image2 = await loadImage("assets/images/jellyfish2.png");
    jellyfishImage3.image3 = await loadImage("assets/images/jellyfish3.png");
}

/**
 * Creating canvas 
*/
async function setup() {
    createCanvas(600, 700);
    await preload();

}


/**
 * Starting the animation of the jellyfish image and the color changing effect with the mouse
*/
function draw() {
    // Set the background color
    background(180, 200, 230);

    //Drawing background making it look like memories that are replacing another ones.
    //adding shapes that will make to make it look like old photos
    push();
    noStroke();
    fill("#36b0f18e");
    rect(200, 150, 250, 350);
    fill("#337ca4");
    rect(100, 400, 150, 150);
    pop();

    push();
    noStroke();
    fill("#3674f185");
    ellipse(430, 500, 190, 190);
    pop();

    push();
    noStroke();
    fill("#d1e4ef55");
    ellipse(160, 150, 200, 200);
    pop();

    // Adding a frame to the canvas to make it look like a photo frame
    push();
    noFill();
    stroke("#f3bb55");
    strokeWeight(10);
    rect(0, 0, width, height);
    pop();

    // Update the userMouse position based on the current position of the mouse
    userMouse.x = mouseX;
    userMouse.y = mouseY;

    // Checking if the mouse is overlapping the jellyfish image
    //Calculating the distance between the mouse and the image
    const d = dist(userMouse.x, userMouse.y, Jellyfish.x, Jellyfish.y);
    const Overlap = d < (Jellyfish.size / 2 + userMouse.size / 2);

    //Drawing the jellyfish tint
    if (Overlap) {
        jellyfishTint = Jellyfish.tint.overlap;
    } else {
        jellyfishTint = Jellyfish.tint.noOverlap;
    }

    //Adding the jellyfish images to the canvas
    push();
    imageMode(CENTER);
    tint(255, jellyfishTint);
    image(jellyfishImage1.image2, jellyfishImage1.x, jellyfishImage1.y, jellyfishImage1.size, jellyfishImage1.size);
    image(jellyfishImage2.image2, jellyfishImage2.x, jellyfishImage2.y, jellyfishImage2.size, jellyfishImage2.size);
    image(jellyfishImage3.image3, jellyfishImage3.x, jellyfishImage3.y, jellyfishImage3.size, jellyfishImage3.size);
    pop();


    //Drawing the user mouse circle
    push();
    noStroke();
    fill(userMouse.fill);
    ellipse(userMouse.x, userMouse.y, userMouse.size);
    pop();


}