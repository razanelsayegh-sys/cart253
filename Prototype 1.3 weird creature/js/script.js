/**
 * Weird creature
 * Razan Elsaygh
 * 
 * Creating a weird and playful creature or alien that is made up of different shapes and colors. 
 */

"use strict";

/**
 * Creating the canvas 
*/
function setup() {
createCanvas(500,500);
}


/**
 * Creating the background and the creature
 */
function draw() {
  background(0,128,168);

  drawCreature();
  drawFace();
  drawBackgroundCreature();
}

/**
 * Drawing the base of thecreature
 */
function drawCreature() {
//Drawing the first part of the creature's face
push();
  fill("lightgreen");
  noStroke();
  ellipse(250, 250, 200, 225);

  //Drawing the body of the creature
  arc(250, 500, 300, 100, radians(180), radians(0));
pop();

//Drawing the bottom half of the creature's face
push();
  fill("lightgreen");
  stroke("green");
  strokeWeight(2);
  ellipse(250, 400, 300, 200);
pop();

//Drawing the ears of the creature
push();
  fill("lightgreen");
  noStroke();
  ellipse(100, 300, 50, 50);
  ellipse(400, 300, 50, 50);
pop();

//Drawing the stroke that connects the ears to the face
push();
  stroke("lightgreen");
  strokeWeight(10);
  line(100, 300, 250, 350);
  line(400, 300, 250, 350);
  
pop();
}

/**
 * Drawing all the facial features of the creature 
 */
function drawFace(){
//Drawing the eyes of the creature
push();
  fill("white");
  noStroke();
  ellipse(200, 250, 50, 120);
  ellipse(300, 250, 50, 120);
pop();

//Drawing the pupils of the creature
push();
  fill("hotpink");
  noStroke();
  ellipse(200, 250, 30, 70);
  ellipse(300, 250, 30, 70);
  fill("pink");
  ellipse(205, 250, 20, 30);
  ellipse(305, 250, 20, 30);
pop();

//Drawing the mouth of the creature
push();
  fill("hotpink");
  noStroke();
  arc(250, 390, 250, 150, radians(0), radians(180));
  fill("lightgreen");
  arc(250, 390, 150, 120, radians(0), radians(180));
pop();

//Drawing the nose of the creature
push();
  fill("hotpink");
  noStroke();
  ellipse(250, 360, 120, 50);
  fill("lightpink");
  ellipse(250, 360, 110, 40);
  fill("hotpink");
  ellipse(250, 360, 100, 30);
  fill("lightpink");
  ellipse(250, 360, 90, 20);
  
pop();

//Drawing the hair of the creature
push();
  fill("greenyellow");
  noStroke();
  ellipse(220, 130, 30, 30);
  ellipse(280, 130, 30, 30);
  
  fill("turquoise");
  ellipse(250, 130, 50, 50);
  ellipse(150, 200, 10, 10);
  ellipse(350, 200, 10, 10);
  ellipse(160, 190, 20, 20);
  ellipse(340, 190, 20, 20);
   
  fill("darkturquoise");
  ellipse(200, 150, 40, 40);
  ellipse(300, 150, 40, 40);

  fill(50, 160, 120);
  ellipse(170, 170, 35, 30);
  ellipse(330, 170, 35, 30);
pop();
}

/**
 * Drawing the background creature that is behind the main creature
 */
function drawBackgroundCreature(){
//Drawing bubbles that are behind the creature
push();
  strokeWeight(2);
  erase(150, 255);
  circle(105, 130, 30);
  circle(155, 200, 10);
  circle(345, 60, 50);
  circle(405, 370, 30);
  circle(450, 100, 20);
  circle(50, 450, 20);
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
}