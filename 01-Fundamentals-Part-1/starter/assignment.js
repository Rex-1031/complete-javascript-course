// LECTURE: Values and Variables
/*Instructions:
    1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)

// 2. Log their values to the console
// */

// // let country = "USA";
// // let continent = "North America";
// // let population = 328200000


// // console.log("Values and Variables Assignment 1: ", country);
// // console.log("Assignment 2: ", continent);
// // console.log("Assignment 3: ", population);


// /*
// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console
// */

// // let isIsland = false;
// // let language;


// // console.log("Data Types Assignment 1: ", isIsland);
// // console.log("Data Types Assignment 2: ", population);
// // console.log("Data Types Assignment 3: ", country);
// // console.log("Data Types Assignment 4: ", language);


// /*
//     LECTURE: let, const and var
//     1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one).
//     2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to    const.
//     3. Try to change one of the changed variables now, and observe what happens.
// */
// const country = "USA";
// const continent = "North America";
// let population = 328200000;
// const isIsland = false;
// let language = "English";


// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// // continent = "South America"

// // console.log(continent);

// // population = 2000;

// // console.log(population);


// /*
//     LECTURE: Basic Operators
//     1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
//     2. Increase the population of your country by 1 and log the result to the console
//     3. Finland has a population of 6 million. Does your country have more people than Finland?
//     4. The average population of a country is 33 million people. Does your country have less people than the average country?
//     5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
// */

// let halfPopulation = population / 2;
// console.log("Basic Operators Exercise 1: ", halfPopulation);

// let increasedPop = population + 1;
// console.log("Basic Operators Exercise 2: ", increasedPop);

// let finlandPop = 6000000;
// let finCompare = population > finlandPop;
// console.log("Basic Operators Exercise 3: ", finCompare);

// let popAv = 33000000;
// let popAvCompare = popAv > population;
// console.log("Basic Operators Exercise 4: ", popAvCompare);

// let description = "The " + country + " is in " + continent + ", and its " + population + " people speak " + language;
// console.log("Basic Operators Exercise 5: ", description);

// /*
// LECTURE: Strings and Template Literals
//     1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
// */
// let description2 = `The ${country} is in ${continent}, and its ${population} people speak ${language}`
// console.log("Strings and Template Literals: ", description2);



// /*
// LECTURE: Taking Decisions: if / else Statements
//     1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's         population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population).

//     2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
// */

// if (population > popAv) {
//     console.log(`The ${country}'s population is above average.`);
// } else {
//     console.log(`The ${country}'s population is ${popAv - population} million below average`);
// }

/*
LECTURE: Taking Decisions: if / else Statements
    1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population).

    2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/

/*
LECTURE: Type Conversion and Coercion
    1. Predict the result of these 5 operations without executing them:
        '9' - '5';
        '19' - '13' + '17';
        '19' - '13' + 17;
        '123' < 57;
         5 + 6 + '4' + 9 - 4 - 2;

    2. Execute the operations to check if you were right
*/
// console.log(`       Conversions and Coercion
//         1. My Prediction: '4'  Actual Result: ${'9' - '5'}
//         2. My Prediction: '617' Actual Result: ${'19' - '13' + '17'}
//         3. My Prediction: 23  Actual Result: ${'19' - '13' + 17}
//         4. My Prediction: false Actual Result: ${'123' < 57}
//         5. My Prediction: 18 Actual Result: ${5 + 6 + '4' + 9 - 4 - 2}

//         I got #5  wrong because 5 + 6 = 11, then 11 + '4' = '114', then '114' + 9 - 4 -2 is '114' + (9 - 4 - 2 ) = '1143'

//     `)

/*
LECTURE: Equality Operators: == vs. ===

    1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');

    2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

    3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1.

    4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value).

    5. Test the code with different values of 'numNeighbours', including 1 and 0.

    6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?

    7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1.

    8. Reflect on why we should use the === operator and type conversion in this situation.
*/
// let numNeighbours = 1;

// console.log(numNeighbours);

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// }
// else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No Borders...')
// }

/*
LECTURE: Logical Operators
    1. Comment out the previous code so the prompt doesn't get in the way.

    2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.

    3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

    4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.


    5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

*/
// const countryName = "Canada";
// let countryLanguage = "English";
// let countryPopulation = 45000000;
// let isIsland = true;

// if (countryLanguage === 'English' && countryPopulation < 50000000 && !isIsland) {
//     console.log(`You should live in ${countryName}!`)
// } else {
//     console.log(`${countryName} does not meet your criteria...`)
// }

/*
LECTURE: The switch Statement

    1. Use a switch statement to log the following string for the given 'language':
        chinese or mandarin: 'MOST number of native speakers!'
        spanish: '2nd place in number of native speakers'
        english: '3rd place'
        hindi: 'Number 4'
        arabic: '5th most spoken language'
     for all other simply log 'Great language too :D'

*/
let language = 'arabic';

switch (language) {
    case 'chinese':
        console.log('MOST number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('Number 4')
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D');

}




/*
LECTURE: The Conditional (Ternary) Operator

    1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!

    2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/

const countryName = "USA";
let countryPopultaion = 5000000;


(countryPopultaion > 33000000) ? console.log(`${countryName}'s population is above average`) : console.log(`${countryName}'s population is below average`);