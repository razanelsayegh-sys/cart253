/**
 * Magical Garden
 * Razan Elsaygh
 * 
 * A drawing of a magical garden where stars appear randomly on 
 * the canvas, creating the feeling of walking throught the garden at night.
 * Creating a dreamy, magical nighttime atmosphere, but also adding depth to the drawing.
 */

"use strict";

let stars = [];

/**
 * Creating the canvas and background
*/
function setup() {
    createCanvas(1000, 300);
    // create the stars
    for (let i = 0; i < 100; i++) {

        let star = {
            x: random(0, 1000),
            y: random(50, 280),
            size: random(4, 10),
            speed: random(0.5, 1.5)
        };

        stars.push(star);
    }

}

/**
 * Drawing the garden
*/
function draw() {
    //background
    background("darkblue");

    // Drawing the field 
    push();
    fill("green");
    noStroke();
    ellipse(520, 250, 1000, 200);
    pop();

    push();
    fill("#1e6b1e");
    noStroke();
    ellipse(820, 320, 700, 300);
    pop();

    push();
    fill("#228B22");
    noStroke();
    ellipse(220, 320, 700, 300);
    pop();

    push();
    fill("#4CAF50");
    noStroke();
    ellipse(720, 370, 700, 300);
    pop();

    // Drawing the fence 
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

    // Drawing a moon
    push();
    fill("white");
    noStroke();
    ellipse(900, 50, 50, 50);
    pop();

    //Drawing the spots on the moon
    push();
    fill("lightgrey");
    noStroke();
    ellipse(900, 50, 10, 10);
    ellipse(906, 54, 15, 10);
    ellipse(890, 35, 10, 10);
    ellipse(895, 45, 5, 5);
    ellipse(900, 70, 10, 10);
    ellipse(900, 60, 5, 5);
    ellipse(920, 60, 5, 5);
    ellipse(915, 35, 6, 6);
    
    pop();

    /**
     * updating the brush size for the stars
     */
    for (let star of stars) {
        // move the stars horizontally
        star.x += star.speed;

        // stars going from left to right in a loop
        if (star.x > width) {
            star.x = 0;
        }
    }

    // other functions to draw the magic stars
    drawBrush();

}


/**
 * Drawing the magic stars 
 */
function drawBrush() {

    for (let star of stars) {

        push();
        noStroke();

        if (star.size < 7) {
            fill("yellow");
        } else {
            fill("orange");
        }

        ellipse(star.x, star.y, star.size);

        pop();
    }
}