/**
 * Notification
 * Razan Elsaygh
 * 
 * This is a drawing of a phone where a notification will 
 * suddenly appear after a certain time. 
 */

"use strict";

//The notification
const notifAppear = {
    //Position
    x: 110,
    y: 130,

    //Colors
    fill: '#88c9ff',

    fills: {

        notif1: '#fffefed5',
        notif2: '#008cff9d',
        notif3: '#ff88f7c8',
        notif4: '#a3fdb3be'
    },

    //Time between changes in milliseconds
    delay: 5000

};

/**
 * Drawing the canvas
*/
function setup() {
    createCanvas(400, 600)

}


/**
 * Creating the drawing (with diffrent drawNames) of the phone and the animation 
*/
function draw() {
    background('#e2fcc9');

    //function created to make the drawing in order
    drawPhone();


    /**
     * Drawing the phone
     */

    function drawPhone() {

        //Drawing the phone
        push();
        fill('#88c9ff');
        stroke('black');
        strokeWeight(3);
        rect(110, 130, 190, 350, 20, 20, 20, 20);
        pop();

        //Creating the side buttons
        push();
        fill('black');
        noStroke();
        //side buttons on the left
        rect(105, 220, 5, 30, 20, 20, 20, 20);
        rect(105, 260, 5, 30, 20, 20, 20, 20);

        //side button on the right
        rect(300, 220, 5, 50, 20, 20, 20, 20);
        pop();

        //Creating the mic/camera
        push();
        fill('black');
        noStroke();
        rect(180, 140, 50, 15, 20, 20, 20, 20);
        pop();
    }



}