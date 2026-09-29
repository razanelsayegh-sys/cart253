/**
 * Melting in the sun
 * Razan Elsaygh
 * 
 * Drawing a melting ice cream in a frame
 */

"use strict";

/**
 * Drawing the canvas and background
*/
function setup() {
createCanvas(500,700);
background("#ffbb77f8");
}


/**
 * Drawing the ice cream and the frame
*/
function draw() {

background("#ffbb77f8");

// Drawing the frame
push ();
fill ("#7795fff8");
noStroke();
rect(80, 115, 340, 440);
pop ()

push ();
fill ("white");
noStroke();
rect(100, 135, 300, 400);
pop ()

//ice cream cone
push();
fill("#d1a566");
triangle(200, 320, 300, 320, 250, 500);
pop()

// Ice cream scoop on the left
push();
fill("#ff80ab");
noStroke();
ellipse(220,300,70,70);
pop();

// scoop on the right
push();
fill("#b1f8c7");
noStroke();
ellipse(280,300,70,70);
pop();

//scoop on the top
push();
fill("#eaff80");
noStroke();
ellipse(250,245,70,70);
pop();




}