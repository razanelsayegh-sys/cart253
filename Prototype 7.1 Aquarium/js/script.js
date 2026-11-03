/**
 * Aqurium
 * Razan Elsaygh
 * 
 * 
 * It's a drawing of an aquarium with fish swimming around.When the users clicks 
 * a new bubble appears and a new fish is added to the aquarium. 
 */

"use strict";

//To create an in between colour to have gradiante colours.
//c1=0%
//c2=100%
//inter=50%
var c1, c2;
//dimensions of the gradient effect
aquariumGradient(110, 100, 370, 280, c1, c2);

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
 * 
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
}

