/**
 * Melting in the sun
 * Razan Elsaygh
 * 
 * Drawing a melting ice cream in a frame
 */

"use strict";

let drips = [];
let colors =["#f96b9a","#81f4a5", "#e2fb65" ];
let meltSpeed = 0.03;
let scoopSize = 70;

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
rect(100, 135, 300, 400);
pop ()

//ice cream cone
push();
fill("#d1ad7b");
triangle(200, 320, 300, 320, 250, 500);
pop()

// Ice cream scoop on the left
push();
fill("#ff80ab");
noStroke();
ellipse(220,300,scoopSize,scoopSize);
pop();

// scoop on the right
push();
fill("#b1f8c7");
noStroke();
ellipse(280,300,scoopSize,scoopSize);
pop();

//scoop on the top
push();
fill("#eaff80");
noStroke();
ellipse(250,245,scoopSize,scoopSize);
pop();

// the melting animation effect
//Pink drops
push();
if(frameCount %150 === 0){   //The amount of drips
    drips.push({
        x: random(220,280),
        y:300,
        color: random(colors)
    });
}

for(let d of drips){
    fill(d.color);
    noStroke();
    ellipse(d.x, d.y, 5, 7);
    d.y +=0.5;
}
pop()

}