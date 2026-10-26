/**
 * Stars Show
 * Razan Elsaygh
 * 
 * The goal is to create an animation where a star change apprence when the 
 * users mouse is pressed
 */

"use strict";

//Variables
let starOne;
let starTwo;
let speed = 30; // this for the background stars

/**
 * Creating the canvas
*/
function setup() {
    createCanvas(600, 400);

    //Calling the stars variable createStar()
    starOne = createStar(220, 170, 80, "#ffd84d", "#fcf802");
    starTwo = createStar(380, 170, 50, "#ff9ed2", "#ff36a1");
}


/**
 * creating the drawing/ aniamtion
*/
function draw() {
    //Background color
    background("#17233f");

    // Functions draw created
    drawBackgroundStars();
    drawStage();

    //Drawing both stars
    drawStar(starOne);
    drawStar(starTwo);

}


/**
 * Drawing the stage (static element)
 */
function drawStage() {

    //Draw the stage floor
    push();
    noStroke();
    fill("#caae67");
    rect(0, 350, 600, 50);
    pop();

    //Drawing the curtain on the left
    push();
    fill("red");
    stroke("darkred");
    strokeWeight(2);
    triangle(0, 250, 0, 600, 150, 490);
    ellipse(0, 0, 320, 620);
    pop();

    //Drawing the curtains line on the left
    push();
    noFill();
    stroke("darkred");
    strokeWeight(2);
    ellipse(0, 0, 320, 520);
    ellipse(0, 0, 220, 520);
    ellipse(0, 0, 220, 450);
    ellipse(0, 0, 120, 420);
    ellipse(0, 0, 100, 220);
    pop();

    //Drawing the curtains on the right
    push();
    fill("red");
    stroke("darkred");
    strokeWeight(2);
    triangle(600, 250, 600, 600, 450, 490);
    ellipse(600, 0, 320, 620);
    pop();

    //Drawing the curtains line on the right
    push();
    noFill();
    stroke("darkred");
    strokeWeight(2);
    ellipse(600, 0, 320, 520);
    ellipse(600, 0, 220, 520);
    ellipse(600, 0, 220, 450);
    ellipse(600, 0, 120, 420);
    ellipse(600, 0, 100, 220);
    pop();

}

/**
 * Drawing little stars in the background
 */
function drawBackgroundStars() {

    push();
    fill("#fcf802");
    noStroke();


    //Drawing little stars
    for (let i = 0; i < 20; i++) {
        let x = random(600);
        let y = random(350);
        let size = random(2, 5);


        ellipse(x, y, size);
    }
    pop();

}


/**
 * Creats the Stars witht their provided position, colour and sizes in setup()
 */

function createStar(x, y, size, colour, brightColour) {
    let star = {
        x: x,
        y: y,
        size: size,
        colour: colour,
        brightColour: brightColour,
        bright: false
    };
    return star;
}

/**
 * 
 * Draws each star and makes it glow when the mouse is pressed 
 */
function drawStar(star) {
    //Drawing the string that holds the star
    push();
    stroke("#d6d6d6");
    strokeWeight(2);
    line(star.x, 0, star.x, star.y);
    pop();

    //Drawing the condition of the star glow
    push();
    noStroke();

    //Draw the glow only when the star is bright
    if (star.bright) {
        fill(star.brightColour);
    }
    else {
        fill(star.colour);
    }

    //Drawing the actual star
    drawStarShape(star.x, star.y, star.size * 0.5, star.size, 5);
    pop();


}

/**
 * Drawing the Star, the five point parts of the star shape
 */

function drawStarShape(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

/**
 * MousePressed function to the users mouse activity
 */

function mousePressed() {
    starOne.bright = !starOne.bright;
    starTwo.bright = !starTwo.bright;
}


