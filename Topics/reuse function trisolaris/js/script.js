/**
 * Trisolaris
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Poorly.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    background("#87ceeb");

    //Here is the new way and bettre
    //Draw the three suns of Trisolaris
    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);

    //Normal learned way:

    //drawSun1();     // as you see here we have 3 times the same function
    //drawSun2();
    //drawSun3();
}
/**
 * As you see here we have 3 times the same function, 
 * each of our functions for the sun are almost identical, that's a 
 * sign that we could use 'reuse'.
 */

/**
 * It would be bettre if we could write one drawSun() function that could take care
 * of drawing each of our diffrent suns, which only differ in terms of their x,y, and size.
 * 
 * As you see: the ellipse() function, where we're able to specify the x,y and diameter of a circle.
 * that allows us to 'reuse' the ellipse() function all over the place!
 */

/**
 * Here is an improved version
 * Draws a sun at specifc position and size
 */
function drawSun(x, y, size) {  //So it<s like you store all the info in one place
    push();
    noStroke();
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}
/**
 * You can see it,s very similar to the original idea, except:
 *
 * - We write a series os parameters in the parentheses of the function, separated by commas;
 *
 * - Each of these parameters will work as a variable inside the function,
 * containing the values passed when the function is called;
 *
 * - We use those parameter variables in the function to make it do its job
 * (in this case to draw a circle at the specified position and size)
 */

/**
 * RECAP!!! AT THE END + ADVATAGES
 */



//This this the old way 

/**
 * Draws the first sun
 */
//function drawSun1() {
// push();
//noStroke();
//fill("#f99736");
//ellipse(500, 100, 80);  // Took these and put then up
// pop();
//}

/**
 * Draws the second sun
 */
//function drawSun2() {
//  push();
//noStroke();
//fill("#f99736");
//ellipse(350, 180, 200);  // Took these and put then up
//  pop();
//}

/**
 * Draws the third sun
 */
//function drawSun3() {
//  push();
// noStroke();
//fill("#f99736");
//ellipse(120, 100, 160); // Took these and put then up
//pop();
//}


/**
 * RECAP!!!
 */
/**
 * The hole trick is to write and use a function with parameters you:
 *
 * 1. Include variable names in the function defenition's parentheses (like above in the draw function)
 *
 * 2. Use those variables in the function's instruction
 *
 * 3. Call the function and provide arguments (values) for each of the
 * parameters in the definition(IN ORDER)
 */


/**
 * THE ADVANTAGES!!!!:
 */

/**
 * - !!!How much shorter this makes your program. Shorter and easier to read!!!!!
 * 
 * - How much easier is to change the suns are drawn. You can just edit drawSun()
 * once and afffect all three suns!!!!!
 */



