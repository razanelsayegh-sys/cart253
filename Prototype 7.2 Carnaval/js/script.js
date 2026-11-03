/**
 * Carnaval
 * Razan Elsaygh
 * 
 * Carnival booth with ballons, the user gets to pop the ballons 
 * by clicking on them and new ballons get added to the screen.
 */

"use strict";

/**
 * Variables for the ballons
 */
let balloons = [

    //ballon 1
    {
        x: 180,
        y: 220,
        size: 40,
        colour: "#E63946",
        speed: 1
    },

    //ballon 2
    {
        x: 270,
        y: 200,
        size: 50,
        colour: "#FFD166",
        speed: 1.5
    },

    //ballon 3
    {
        x: 390,
        y: 230,
        size: 45,
        colour: "#4361EE",
        speed: 2
    }
];


/**
 * Creating canvas
*/
function setup() {
    createCanvas(600, 500);
}


/**
 * Creating the drawing
*/
function draw() {

    //Background colour
    background("#A8DADC");

    //functions called
    drawBooth();

    //Draw every Balloon in the array(loop and draws wach balloon automatically)
    for (let balloon of balloons) {
        drawBalloon(balloon);
    }
}


/**
 * Drawing the carnaval booth
 */
function drawBooth() {

    //Booth structure
    push();
    noStroke();
    fill("#e2c0a4");
    rect(50, 100, 500, 600);
    pop();

    //Booth roof
    push();
    noStroke();
    fill("#E63946");
    rect(20, 20, 560, 130, 20, 20);
    pop();

    //Stripes on the roof
    push();
    noStroke();
    fill("#F1FAEE");
    rect(70, 20, 40, 120);
    rect(170, 20, 40, 120);
    rect(275, 20, 40, 120);
    rect(370, 20, 40, 120);
    rect(475, 20, 40, 120);
    pop();

    //Counter
    push();
    noStroke();
    fill("#F1FAEE");
    rect(50, 350, 500, 140);
    pop();

    //Ground
    push();
    noStroke();
    fill("#457B9D");
    rect(0, 450, 600, 50);
    pop();

    //Front decoration
    push();
    fill("#E63946");
    textAlign(CENTER);
    textSize(30);
    text("CARNAVAL", 300, 420);
    pop();
}

/**
 * Drawing the ballons
 */

function drawBalloon(balloon) {

    //Ballon body
    push();
    noStroke();
    fill(balloon.colour);
    ellipse(balloon.x, balloon.y, balloon.size, balloon.size * 1.2);
    pop();




}
