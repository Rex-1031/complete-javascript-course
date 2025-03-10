/*
JavaScript Fundamentals – Part 2
Note: Please start Part 2 from scratch and comment out all the code from Part 1.


LECTURE: Functions
    1. Write a function called 'describeCountry' which takes three parameters:
    'country', 'population' and 'capitalCity'. Based on this input, the
    function returns a string with this format: 'Finland has 6 million people and its
    capital city is Helsinki'

    2. Call this function 3 times, with input data for 3 different countries. Store the
    returned values in 3 different variables, and log them to the console.
*/

// function describeCountry(country, population, capitalCity) {
//     return console.log(`${country} has ${population} people and its
//     capital city is ${capitalCity}`)
// }

// const finland = describeCountry("Finland", "6 million", "Helsinki");
// console.log(finland);

// const usa = describeCountry("The United States of America", "328 million", "Washington D.C.");

// const canada = describeCountry("Canada", "37 million", "Ottawa")


/*
LECTURE: Function Declarations vs. Expressions
    1. The world population is 7900 million people. Create a function declaration
    called 'percentageOfWorld1' which receives a 'population' value, and
    returns the percentage of the world population that the given population
    represents. For example, China has 1441 million people, so it's about 18.2% of
    the world population.
*/

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// let usaPopulation = percentageOfWorld1(328);


// let chinaPopulation = percentageOfWorld1(1441);


// let canadaPopulation = percentageOfWorld1(37)

// console.log('percentageOfWorld1: ', usaPopulation, chinaPopulation, canadaPopulation);

// let usaPopulation2 = percentageOfWorld2(328);


// let chinaPopulation2 = percentageOfWorld2(1441);


// let canadaPopulation2 = percentageOfWorld2(37)

// console.log('percentageOfWorld2: ', usaPopulation2, chinaPopulation2, canadaPopulation2);
/*

    2. To calculate the percentage, divide the given 'population' value by 7900
    and then multiply by 100.

    3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
    store the results into variables, and log them to the console.

    4. Create a function expression which does the exact same thing, called
    'percentageOfWorld2', and also call it with 3 country populations (can be
    the same populations)
*/


/*

LECTURE: Arrow Functions
    1. Recreate the last assignment, but this time create an arrow function called
    'percentageOfWorld3'.

*/

// const percentageOfWorld3 = population => { return (population / 7900) * 100; }

// let usaPopulation3 = percentageOfWorld3(328);


// let chinaPopulation3 = percentageOfWorld3(1441);


// let canadaPopulation3 = percentageOfWorld3(37);

// console.log('percentageOfWorld3: ', usaPopulation3, chinaPopulation3, canadaPopulation3)



/*
LECTURE: Functions Calling Other Functions
    1. Create a function called 'describePopulation'. Use the function type you
    like the most. This function takes in two arguments: 'country' and
    'population', and returns a string like this: 'China has 1441 million people,
    which is about 18.2% of the world.'

    2. To calculate the percentage, 'describePopulation' call the
    'percentageOfWorld1' you created earlier.

    3. Call 'describePopulation' with data for 3 countries of your choice.
*/
// const describePopulation = (country, population) => {
//     console.log(`${country} has ${population} people,
//     which is about ${percentageOfWorld1(population).toFixed(2)}% of the world `)
// }
// console.log(describePopulation("The USA", 328))
// console.log(describePopulation("China", 1441))
// console.log(describePopulation("Canada", 37))

/*
LECTURE: Introduction to Arrays
    1. Create an array containing 4 population values of 4 countries of your choice.
    You may use the values you have been using previously. Store this array into a
    variable called 'populations'

    2. Log to the console whether the array has 4 elements or not (true or false)

    3. Create an array called 'percentages' containing the percentages of the
    world population for these 4 population values. Use the function
    'percentageOfWorld1' that you created earlier to compute the 4
    percentage values
*/

// const populations = [6, 328, 1441, 37]
// console.log('Assignment 1: Array of populations (in millions). ', populations)

// console.log('Assignment 2: Does the array have for elements? ', populations.length === 4)

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ]

// console.log('Assignment 3: Population percentages. ', percentages)



/*
LECTURE: Basic Array Operations (Methods)
    1. Create an array containing all the neighbouring countries of a country of your
    choice. Choose a country which has at least 2 or 3 neighbours. Store the array
    into a variable called 'neighbours'

    2. At some point, a new country called 'Utopia' is created in the neighbourhood of
    your selected country. So add it to the end of the 'neighbours' array

    3. Unfortunately, after some time, the new country is dissolved. So remove it from
    the end of the array

    4. If the 'neighbours' array does not include the country ‘Germany’, log to the
    console: 'Probably not a central European country :D'

    5. Change the name of one of your neighbouring countries. To do that, find the
    index of the country in the 'neighbours' array, and then use that index to
    change the array at that index position. For example, you can search for
    'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

// let neighbours = ['Canada', 'Mexico'];

// console.log('Array Methods 1: ', neighbours);

// neighbours.push('Utopia');

// console.log('Array Methods 2: ', neighbours);

// neighbours.pop();
// console.log('Array Methods 3: ', neighbours);

// console.log('Array Methods 4: ')
// neighbours.includes('Germany')? console.log('A central European Country.'): console.log('Probably not a central European country.')

// neighbours[0] = 'The Commonwealth of Cananda'
// console.log('Array Methods 5: ', neighbours);

/*
LECTURE: Introduction to Objects
    1. Create an object called 'myCountry' for a country of your choice, containing
    properties 'country', 'capital', 'language', 'population' and
    'neighbours' (an array like we used in previous assignments)
*/
let myCountry = {
    country: 'The Unites States of America',
    capital: 'Washington D.C.',
    language: 'English',
    populationInMillions: 382,
    neighbours: ['Canada', 'Mexico']
}

// console.log('Intro to Objects 1: ', myCountry)






/*
LECTURE: Dot vs. Bracket Notation
    1. Using the object from the previous assignment, log a string like this to the
    console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
    and a capital called Helsinki.'

    2. Increase the country's population by two million using dot notation, and then
    decrease it by two million using brackets notation.
*/


// console.log(`Dot vs. Bracket Notation 1:
// ${myCountry.country} has ${myCountry.populationInMillions} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.

// `)

myCountry.populationInMillions = 384;
// console.log('Dot vs. Bracket Notation 2a: ', myCountry);

myCountry['populationInMillions'] = 382;

// console.log('Dot vs. Bracket Notation 2b: ', myCountry);

/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.

2. Call the 'describe' method.

3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/
// myCountry.describe = function (){
//     return `${this.country} has ${this.populationInMillions} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
// }

// console.log('Object Methods 1: ', myCountry);
// console.log('Object Methods 2: ', myCountry.describe);

/*
LECTURE: Iteration: The for Loop
    1. There are elections in your country! In a small town, there are only 50 voters.
    Use a for loop to simulate the 50 people voting, by logging a string like this to
    the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

// for (let voters = 1; voters <= 50; voters++) {
//     console.log(`Voter number ${voters} is currently voting`);
// }




/*
LECTURE: Looping Arrays, Breaking and Continuing
    1. Let's bring back the 'populations' array from a previous assignment.

    2. Use a for loop to compute an array called 'percentages2' containing the
    percentages of the world population for the 4 population values. Use the
 function 'percentageOfWorld1' that you created earlier.

    3. Confirm that 'percentages2' contains exactly the same values as the
    'percentages' array that we created manually in the previous assignment,
    and reflect on how much better this solution is.
*/
const populations = [6, 328, 1441, 37];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {

    const perc = percentageOfWorld1(populations[i]).toFixed(2);

    percentages2.push(perc);

}

console.log('Assignment: Looping Arrays ', percentages2);



/*
LECTURE: Looping Backwards and Loops in Loops
    1. Store this array of arrays into a variable called 'listOfNeighbours'
    [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];

    2. Log only the neighbouring countries to the console, one by one, not the entire
    arrays. Log a string like 'Neighbour: Canada' for each country.

    3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
    worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];


for (let i = 0; i < listOfNeighbours.length; i++)
    for (let j = 0; j < listOfNeighbours[i].length; j++)
        console.log(`Neighbor: ${listOfNeighbours[i][j]}`);




/*
LECTURE: The while Loop
    1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
    but this time using a while loop (call the array 'percentages3')

    2. Reflect on what solution you like better for this task: the for loop or the while
    loop?
*/

const percentages3 = [];

let i = 0;

while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]).toFixed(2)
    percentages3.push(perc);
    i++
}
console.log('The While Loop: ', percentages3);


