/**
 * Under the Sea
 * Razan Elsaygh
 * 
 * This is a moving image around the canvas of 
 * a seaweed, animated, a simple scene under the sea.
 */

"use strict";


// Adding the seaweedimages to the canvas
let seaweedImage1 = {
    //position of the image on the canvas
    x: 150,
    y: 270,
    size: 330,
    //Velocity of the seaweed moves horizontally to the right
    velocity: {
        x: 1.5,
        y: 0
    },
    //The image of the seaweed will be loaded in the preload function below
    image: undefined,
};

let seaweedImage2 = {
    //position of the image on the canvas
    x: 300,
    y: 430,
    size: 450,
    //Velocity of the seaweed moves horizontally to the right
    velocity: {
        x: 1,
        y: 0
    },
    //The image of the seaweed will be loaded in the preload function below
    image: undefined
};

let seaweedImage3 = {
    //position of the image on the canvas
    x: 490,
    y: 620,
    size: 450,
    //Velocity of the seaweed moves horizontally to the right
    velocity: {
        x: 2,
        y: 0
    },
    //The image of the seaweed will be loaded in the preload function below
    image: undefined
};

async function preload() {
    //Loading the seaweed image to the canvas
    seaweedImage1.image = await loadImage("assets/images/Seaweed1.png");
    seaweedImage2.image = await loadImage("assets/images/Seaweed2.png");
    seaweedImage3.image = await loadImage("assets/images/Seaweed3.png");
}

/**
 * Creating canvas 
*/
async function setup() {
    createCanvas(600, 700);

    await preload();
}


/**
 * Creating the drawing 
*/
function draw() {
    background("#ceb9797a");

    // drawing the water horizon
    push();
    fill("#73c6f3c4");
    noStroke();
    rect(0, 0, width, 300);
    pop();

    push();
    fill("#55bcf3a5");
    noStroke();
    rect(0, 250, 600, 30);
    pop();

    push();
    fill("#189fe7c1");
    noStroke();
    rect(0, 280, 600, 20);
    pop();

    //Drawing the horizon line
    push();
    stroke("#1e8abc");
    strokeWeight(5);
    line(0, 300, 600, 300);
    pop();

    //Drawing lines on the sand to create a more realistic effect of the sand
    push();
    stroke("#ba9e669b");
    strokeWeight(2);
    line(0, 350, 650, 650);
    line(0, 460, 660, 660);
    line(0, 570, 670, 670);
    line(0, 680, 680, 680);
    line(0, 790, 690, 690);
    line(250, 300, 700, 690);
    line(380, 300, 760, 740);
    pop();

    //Calling the functions to move, wrap and draw the seaweed images
    moveSeaweed(seaweedImage1);
    moveSeaweed(seaweedImage2);
    moveSeaweed(seaweedImage3);

    wrapSeaweed(seaweedImage1);
    wrapSeaweed(seaweedImage2);
    wrapSeaweed(seaweedImage3);

    drawSeaweed(seaweedImage1);
    drawSeaweed(seaweedImage2);
    drawSeaweed(seaweedImage3);
}
//Draws the seaweed images on the canvas
function drawSeaweed(seaweed) {
    image(seaweed.image, seaweed.x, seaweed.y, seaweed.size, seaweed.size);
}
//Moves the seaweed images across the canvas
function moveSeaweed(seaweed) {
    seaweed.x += seaweed.velocity.x / 2;
    seaweed.y += seaweed.velocity.y / 2;
}

//Wraps the seaweed images around the canvas
function wrapSeaweed(seaweed) {
    if (seaweed.x > width) {
        seaweed.x = 0;
    } else if (seaweed.x < 0) {
        seaweed.x = width;
    }

    if (seaweed.y > height) {
        seaweed.y = 0;
    } else if (seaweed.y < 0) {
        seaweed.y = height;
    }

    //Display the seaweed images on the canvas
    push();
    imageMode(CENTER);
    image(seaweed.image, seaweed.x, seaweed.y, seaweed.size, seaweed.size);
    pop();



}

