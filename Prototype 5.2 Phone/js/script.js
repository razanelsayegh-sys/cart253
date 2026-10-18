/**
 * Notification
 * Razan Elsaygh
 * 
 * This is a drawing of a phone where a notification will 
 * suddenly appear after a certain time. 
 */

"use strict";

//The notification banner
const notifAppear = {

    //Position
    x: 130,
    y: 390,

    //Size
    size: {
        x: 150,
        y: 70,
    },

    //Rounded sides
    round: {
        x: 20,
    },

    //Colors
    fill: '#fffefed5',

    fills: {

        notif1: '#fffefed5',
        notif2: '#008cff9d',
        notif3: '#ff88f7c8',
        notif4: '#a3fdb3be'
    },

    //Time between changes in milliseconds
    delay: 2000  //to make it slower

};

/**
 * Drawing the canvas
*/
function setup() {
    createCanvas(400, 600);

    //Start the notification blinking

    setInterval(changeNotification, notifAppear.delay);

}

/**
 * Change the notification's color
 */

function changeNotification() {
    //notif1(white) to notif2(blue)
    if (notifAppear.fill === notifAppear.fills.notif1) {
        notifAppear.fill = notifAppear.fills.notif2;
    }

    //notif2(blue) to notif3(pink)
    else if (notifAppear.fill === notifAppear.fills.notif2) {
        notifAppear.fill = notifAppear.fills.notif3;
    }

    //notif3(pink) to notif4(green)
    else if (notifAppear.fill === notifAppear.fills.notif3) {
        notifAppear.fill = notifAppear.fills.notif4;
    }

    //notif4(green) to notif1(white)
    else if (notifAppear.fill === notifAppear.fills.notif4) {
        notifAppear.fill = notifAppear.fills.notif1;
    }

}


/**
 * Creating the drawing (with diffrent drawNames) of the phone and the animation 
*/
function draw() {
    background('#F3E8FF');

    //functions 
    drawPhone();

}


/**
 * Drawing the phone(static part)
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

    //Drawing a notification badge

    push();
    fill(notifAppear.fill);
    noStroke();
    rect(notifAppear.x, notifAppear.y, notifAppear.size.x, notifAppear.size.y, notifAppear.round.x, notifAppear.round.x, notifAppear.round.x, notifAppear.round.x);
    pop();

}



