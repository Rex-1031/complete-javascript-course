'use strict';

// let hasDriversLiscense = false;
// const passTest = true;

// if (passTest) hasDriversLiscense = true;

// if (hasDriversLiscense) console.log("I can drive!");

//Lecture Functions


// function logger() {
//     console.log("My name is Steve");
// }

// logger();
// logger();
// logger();



// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice;

// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// console.log('Apple Juice: ', fruitProcessor(5, 0))

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log('Apple-Orange Juice: ', appleOrangeJuice);


//LECTURE: Function Declarations vs. Expressions

// Function Declarations can be hoisted. 
function calcAge1(birthYear) {
    return 2037 - birthYear
}

const age1 = calcAge1(1983);


//Function Expression cannot be hoisted. 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1983);

console.log(age1, age2)


// LECTURE: Arrow Functions


// LECTURE: Functions Calling Other Functions


// LECTURE: Introduction to Arrays

// LECTURE: Basic Array Operations (Methods)


// LECTURE: Introduction to Objects


// LECTURE: Dot vs. Bracket Notation


// LECTURE: Object Methods

// LECTURE: Iteration: The for Loop

// LECTURE: Looping Arrays, Breaking and Continuing

// LECTURE: Looping Backwards and Loops in Loops


// LECTURE: The while Loop


