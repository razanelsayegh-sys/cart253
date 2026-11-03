/**
 * Aqurium
 * Razan Elsaygh
 * 
 * 
 * It's a drawing of an aquarium with fish swimming around.When the users clicks on the canvas
 * a new fish is added to the aquarium and a new bubble appears when the Up arrow is pressed . 
 */

"use strict";

/**VARIABLES */

//To create an in between colour to have gradiante colours.
//c1=0%
//c2=100%
//inter=50%
var c1, c2;


//Varibales for the fish and bubbles
//creating an array for the fishs
let fishes = [

    //Fish 1
    {
        x: 100,
        y: 220,
        size: 50,
        colour: "#F4A261",
        speed: 1,
    },

    //Fish 2
    {
        x: 250,
        y: 350,
        size: 65,
        colour: "#E76F51",
        speed: 1.5,
    },

    //Fish 3
    {
        x: 400,
        y: 200,
        size: 50,
        colour: "#FFD166",
        speed: 2,
    }


];

//creating an array for the bubbles
let bubbles = [

    //Bubble 1
    {
        x: 100,
        y: 400,
        size: 15,
        speed: 1,
    },

    //Bubble 2
    {
        x: 300,
        y: 330,
        size: 20,
        speed: 1.5,
    },

    //Bubble 3
    {
        x: 500,
        y: 320,
        size: 12,
        speed: 2,
    }
];

/**
 * Creating the canvas& background colour
*/
function setup() {

    createCanvas(600, 500);

    //Creating the two colours for the gradiant effect
    //Define colors
    c1 = color(120, 220, 255); //light water blue
    c2 = color(0, 30, 120);  //deep ocean blue


}



/**
 * Creating the drawing (aqurium and fish)
*/
function draw() {

    //Adding the background colour
    background("#57b1ff");


    //Dimmenions of the grandiant effect in the aquarium
    aquariumGradient(5, 105, 590, 390, c1, c2);

    //Drawing the aqurium
    noFill();
    stroke("#e0eaf8");
    strokeWeight(5);
    rect(5, 105, 590, 390);

    //functions called
    drawEnviroment();
    drawText();

    //Draw evry fish in the array
    for (let fish of fishes) {
        moveFish(fish);
        drawFish(fish);
    }

    //Draw every bubble in the array(loop)
    for (let bubble of bubbles) {
        moveBubble(bubble);
        drawBubbles(bubble);
    }
}

function drawEnviroment() {
    //Sand waves at the bottom
    push();
    fill("#E9C46A");
    stroke("#f1d48b");
    strokeWeight(4);
    ellipse(70, 465, 120, 20);
    ellipse(150, 465, 120, 20);
    ellipse(250, 465, 120, 20);
    ellipse(350, 465, 120, 20);
    ellipse(450, 465, 120, 20);
    ellipse(530, 465, 120, 20);
    pop();

    //Sand at the bottom of the aquarium
    push();
    noStroke();
    fill("#E9C46A");
    rect(7, 465, 586, 30);
    pop();


    // Seaweed
    push();
    stroke("#479773");
    strokeWeight(8);
    line(100, 450, 105, 390);
    line(100, 420, 90, 400);
    line(100, 430, 120, 405);
    line(100, 440, 90, 420);

    line(550, 450, 550, 385);
    line(550, 420, 530, 400);
    line(550, 435, 565, 410);
    pop();

    // Rocks
    push();
    fill("#7b8187");
    stroke("#adb5bd");
    strokeWeight(2);
    ellipse(80, 450, 70, 35);
    ellipse(490, 450, 90, 40);
    pop();

}

/**
 * Drawing the fish
 */
function drawFish(fish) {
    // fish body
    push();
    noStroke();
    fill(fish.colour);
    ellipse(fish.x, fish.y, fish.size, fish.size * 0.6);
    pop();

    // fish tail
    push();
    fill(fish.colour);
    noStroke();
    triangle(fish.x - fish.size / 4, fish.y, fish.x - fish.size * 0.6, fish.y - 20, fish.x - fish.size * 0.6, fish.y + 20);
    pop();

    // fish eyes(white part)

    push();
    fill(255);
    noStroke();
    ellipse(fish.x + fish.size / 4 + 1, fish.y - 3, 10, 10);
    pop();

    // fish eyes(black part)
    push();
    fill("#000000");
    noStroke();
    ellipse(fish.x + fish.size / 4, fish.y - 3, 3, 3);
    pop();
}

/**
 * Make the fish move across the screen
 */
function moveFish(fish) {

    //Move the fish horisontally
    fish.x += fish.speed;

    // If the fish goes off the right side of the screen, reset its position to the left side
    if (fish.speed > 0 && fish.x + fish.size / 2 > 590) {    //to check if the fish has left the aquarium position
        fish.x = 15 - fish.size / 2;  //reappear on the left
    }

    //if the fish reaches the left side
    if (fish.speed < 0 && fish.x - fish.size / 2 < 10) {
        fish.x = 590 + fish.size / 2;  //reappear on the right
    }
}

/**
 * Adding the draw bubbles function
 */
function drawBubbles(bubble) {
    push();
    stroke("#D9F3FF")
    strokeWeight(2);
    ellipse(bubble.x, bubble.y, bubble.size);
    pop();
}

function moveBubble(bubble) {
    bubble.y -= bubble.speed;

    //If the bubble reaches the top, bring it back down
    if (bubble.y + bubble.size / 2 < 120) {
        bubble.y = 400; //height
        bubble.x = random(10, 590); //Randomize the x position of the bubble when it resets
    }
}

/**
 * Adding the gradiant effect in the canvas background
 */
function aquariumGradient(x, y, w, h, c1, c2) {

    push();
    noFill();
    //Adding the gradiant effect in the aquarium
    for (var i = 0; i < h; i++) {
        var inter = map(i, 0, h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, y + i, x + w, y + i);
    }
    pop();
}

/**
 * Key pressed function to make the bubbles appear when the 
 * user presses "UP ARROW"  */
function keyPressed() {

    // Check if the UP_ARROW key is pressed and the mouse is within the aquarium area
    if (keyCode === UP_ARROW &&
        mouseX > 10 && mouseX < 590 && mouseY > 110 && mouseY < 460) {

        // Add a new bubble at the mouse position
        bubbles.push({    //push adds bubbles to the array
            x: mouseX,
            y: mouseY,
            size: random(5, 20),
            speed: random(1, 3)
        });

    }
}

/**
 * Mouse pressed function to add a new fish to the aquarium when the user presses a key
 */
function mousePressed() {
    // Add a new fish at the mouse position
    fishes.push({
        x: mouseX,
        y: mouseY,
        size: random(30, 70),
        colour: color(random(255), random(255), random(255)),
        speed: random(1, 3)
    });
}

/**
 * Text to display on the canvas (instructions)
 */
function drawText() {
    push();
    fill(255);
    textSize(20);
    noStroke();
    textAlign(CENTER);
    text("Click on the canvas/ Press UP ARROW", width / 2, 30);
    pop();
}

