/**
 * The Shower
 * Razan Elasygh
 * 
 * This a drawing of a shower that interacts with the mouse movements.
 */

"use strict";

/**
 * Drawing the canvas and background
*/

let drops = [];
let bubbles = [];

function setup() {
    createCanvas(500, 900);
    background("#fda8e27c");

}


/**
 * Drawing the shower and bath
*/
function draw() {

background("#fda8e27c"); 

// drawing the shower head
push();
strokeWeight(20);
stroke("lightgrey");
noFill();
arc(500, 290, 560, 430, radians(230), radians(410));
pop();

push();
fill("lightgrey");
noStroke();
rect(300, 100, 155, 50, 20, 15, 10, 5);
pop ();

push();
fill("lightgrey");
stroke("grey");
ellipse(300, 150, 200, 70);
pop ();

// Drawing the details on the shower head

push();
strokeWeight(2);
erase(150, 255);
circle(250, 140, 10);
circle(250, 170, 10);
circle(230, 150, 10);
circle(280, 172, 10);
circle(280, 135, 10);
circle(310, 172, 10);
circle(320, 135, 10);
circle(340, 170, 10);
circle(350, 140, 10);
circle(375, 160, 10);
noErase();
pop ();

//Drawing the bath
push(); 
fill("orange");
ellipse(250, 820, 680, 240);
pop();

push();
strokeWeight(100);
stroke("lightgrey");
noFill();
arc(250, 500, 1050, 430, radians(340), radians(205));
pop();

//Drawing bubbles that will change transparency during the animation
push();
strokeWeight(2);
erase(150, 255);
circle(105, 130, 30);
circle(155, 200, 10);
circle(345, 60, 50);
circle(405, 370, 30);
circle(450, 100, 20);
circle(50, 450, 20);
circle(345, 270, 30);
circle(45, 570, 70);
noErase();

noStroke();
erase(150, 255);
circle(30, 330, 30);
circle(375, 200, 15);
circle(475, 460, 50);
circle(445, 170, 30);
circle(50,50,20);

noErase();
pop();

// Drawing the water in the bath
push();
strokeWeight(20);
stroke("#61bff9c6");
noFill();
arc(250, 500, 1050, 430, radians(340), radians(205));
pop();



/**
 * The interactive part of the drawing
 */

// Mouse moves DOWN- Water drops
if(mouseY > pmouseY){
    bubbles = [];
    drops.push({x: mouseX, y: mouseY });
}
// falling animated water
for(let d of drops){
    fill("#00bbff");
    noStroke();
    ellipse(d.x, d.y,10, 20);
    d.y +=3; 
}

//Mouse moves UP- Bubbles
if(mouseY < pmouseY) {
   drops = [];
   bubbles.push({x: mouseX, y: mouseY});
}
//rising animated bubbles
for(let b of bubbles){
    noFill();
    stroke("white");
    strokeWeight(2);
    ellipse(b.x, b.y, 20);
    b.y -= 2;
}


}