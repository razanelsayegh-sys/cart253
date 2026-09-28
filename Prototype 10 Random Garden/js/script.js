/**
 * Magical Garden
 * Razan Elsaygh
 * 
 * A drawing of a colorful garden with flowers that appears randomly on the canvas.
 * The flowers flowers are drawn with diffrent sizes and colors, to add depth and make it more magical.
 */

"use strict";

let brush={
    x:500,
    y:335,
    size: 5,
}

/**
 * Creating the canvas and background
*/
function setup() {
// canvas
    createCanvas(1000,300);
//background
    background("lightblue")
}

/**
 * Drawing the garden
*/
function draw() {
// Drawing the field 
 push();
 fill("green");
 noStroke();
 ellipse( 520, 250, 1000,200);
pop();

push();
 fill("#1e6b1e");
 noStroke();
 ellipse(820, 320,700, 300);
pop();

 push();
 fill("#228B22");
 noStroke();
 ellipse(220, 320,700, 300);
pop();

push();
 fill("#4CAF50");
 noStroke();
 ellipse(720, 370,700, 300);
pop();

// Drawing the fence around the flowers
push();
fill("brown");
noStroke();
// the fence in the middel
rect(500, 125, 20, 30);

// strating fence from the left to the middel
rect(0, 175, 20, 30);
rect(50, 160, 20, 30);
rect(100, 150, 20, 30);
rect(150, 145, 20, 30);
rect(200, 140, 20, 30);
rect(250, 138, 20, 30);
rect(300, 135, 20, 30);
rect(350, 130, 20, 30);
rect(400, 125, 20, 30);
rect(450, 125, 20, 30);

//strating fence from the right to the middel
rect(550, 125, 20, 30);
rect(600, 125, 20, 30);
rect(650, 128, 20, 30);
rect(700, 132, 20, 30);
rect(750, 135, 20, 30);
rect(800, 140, 20, 30);
rect(850, 142, 20, 30);
rect(900, 150, 20, 30);
rect(950, 160, 20, 30);
rect(990, 170, 20, 30);
pop();

//adding an arc that connects the fences toghter
push();
strokeWeight(5);
stroke("brown");
noFill();
arc(500, 800, 2560, 1330, radians(230), radians(310));
pop();

// Drawing a sun
push();
fill("yellow");
noStroke();
ellipse(900, 50, 50, 50);



}