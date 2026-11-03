/**
 * Title of Project
 * Author Name
 * 
 * Creating Arrays and Introducing them 
 */

"use strict";
//We could break pi for some reason, pherhaps to mess with a geometrist
let piArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

//Change element 5 from 9 to 8
piArray[5] = 8;

//As you can see here, we’re able to treat each element in an array like an individual variable - we can get its value or set it -
// by just writing the array name and then the index in square brackets.

//You can also use variables as indexes or to set elements
//A variable as an index(this will be really useful later!)
let index = 7;
let eightDigitOfpi = piArray[index]; //6

//A variable as an element
let apple = 2;
let banana = 6;
let carrot = 4;
let nutritionalArray = [apple, banana, carrot]; //[2,6,4]

//lenght: Arrays know how long they are, that is chow many elements they have.
//We can get that information with a proprty arrays called lenght.

let numberOfHealthySnacks = nutritionalArray.length; //3

//This will come in handy a bunch and using lenght is much bettre than using a hardcoded
//number because, as we'll see, arrays can change over time.

/**
 * 
*/
function setup() {

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}