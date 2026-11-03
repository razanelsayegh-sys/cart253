/**
 * Aqurium
 * Razan Elsaygh
 * 
 * 
 * It's a drawing of an aquarium with fish swimming around.When the users clicks 
 * a new bubble appears and a new fish is added to the aquarium. 
 */

"use strict";

/**VARIABLES */

//To create an in between colour to have gradiante colours.
//c1=0%
//c2=100%
//inter=50%
var c1, c2;
//dimensions of the gradient effect
aquariumGradient(110, 100, 370, 280, c1, c2);

//Varibales for the fish and bubbles
let fish = [];  //creating an array for the fish
let bubbles = []; //creating an array for the bubbles

/**
 * Creating the canvas
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
    background("#ffee57");


    //Dimmenions of the grandiant effect in the aquarium
    aquariumGradient(5, 105, 590, 390, c1, c2);

    //Drawing the aqurium
    noFill();
    stroke("#e0eaf8");
    strokeWeight(5);
    rect(5, 105, 590, 390);

    //functions called
    drawEnviroment();
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

