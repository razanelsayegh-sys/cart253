/**
 * Loops particse
 * Author Name
 * 
 * Loop particing with the teacher
 */

"use strict";

/**
 * create Canvas
*/
function setup() {
    createCanvas(800, 800);
}


/**
 * Amazing loopy thing
*/
function draw() {
    background(0);

    //let step = 10;//**goes with the step random */
    let step = 0;

    for (let x = 0; x <= width; x += step) {  //Variable; 
        //**step += random(0, 5);//This makes the kind of Netflx photo
        step += (0.025);
        translate(x, height / 2); //translate is about how the zero moves(rotation)
        //stroke(255);//**Goes with the random */
        rotate(map(x, 0, width, height, mouseX))
        stroke(map(x, 0, width, 255, 0));
        line(x, -height / 2, x, height / 2);
    }
}