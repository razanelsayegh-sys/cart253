/**
 * Traffic Light
 * Pippin Barr
 * 
 * A starting point for creating a traffic light
*/

"use strict";

// The traffic light
const trafficLight = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    fill: "#00ff00", // Starts green
    fills: {
        stop: "#ff0000", // Red
        slow: "#ffbb00", // Orange
        go: "#00ff00" // Green
    },
    delay: 5000 // How long between lights
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

    /**start the timer after the traffic light's delay
    *This one is good but it will change the light once and the cars
    *will stay in red forever.
    */

    //setTimeout(changeLight, trafficLight.delay);


    /**Important to know about the composition of both events == 
    *setTimeout / Interval(eventHandlerFunction, delayInMilliseconds);: 
    */

    /** eventHandlerFunction: is the name of the function that should be called 
    * each time the event happens - that is, when the timer goes off (over and over)
    */

    /**delayInMilliseconds: is how long to wait, in milliseconds, before calling 
    *the eventHandlerFunction each time
    * /



    /**here is another event the same but bettre (setInterval)*/
    setInterval(changeLight, trafficLight.delay);

}

/**
 * Changes the traffic light to red
 */
function changeLight() {
    //trafficLight.fill = trafficLight.fills.stop;

    /**
     * As we changed the event from Timeout to ==Interval we need to change some
     * stuff in the function to ba a bit more sophisticated to make a cycle
     */

    //Green goes to orange
    if (trafficLight.fill === trafficLight.fills.go) {
        trafficLight.fill = trafficLight.fills.slow;
    }

    //orange it goes red
    else if (trafficLight.fill === trafficLight.fills.slow) {
        trafficLight.fill = trafficLight.fills.stop;
    }

    //Red goes to green
    else if (trafficLight.fill === trafficLight.fills.stop) {
        trafficLight.fill = trafficLight.fills.go;
    }
}




/**
 * Display the traffic light
 */
function draw() {
    background(0);

    // Traffic light
    push();
    noStroke();
    fill(trafficLight.fill);
    ellipse(trafficLight.x, trafficLight.y, trafficLight.size);
    pop();

}





