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
// function calcAge1(birthYear) {
//     return 2037 - birthYear
// }

// const age1 = calcAge1(1983);


// //Function Expression cannot be hoisted. 
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(1983);

// console.log(age1, age2)




// LECTURE: Arrow Functions

// const calcAge3 = birthYear => 2037- birthYear
// const age3 = calcAge3(1983)

// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age; 
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1983, 'Steve');



// LECTURE: Functions Calling Other Functions

// function cutFruit(fruit){
//     return fruit *4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);


//     const juice = `Juice with ${applePieces} pieces of  apple and ${orangePieces} pieces of orange`
//     return juice;

// }


// console.log(fruitProcessor(2, 3))


//FUNCTION REVIEW
// const calcAge = function(birthYear){
//     return 2037 - birthYear
// }



// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear)
//     const retirement = 65 - age; 

//     if (retirement > 0 ){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }else{
//         console.log(`${firstName} has already retired! `);
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1983, 'Steve'));
// console.log(yearsUntilRetirement(1953, 'Mike'));






// LECTURE: Introduction to Arrays


// const calcAge = function(birthYear){
//         return 2037 - birthYear
//     }

//     const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length -1]);


// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length -1]) ]

// console.log(ages);


// LECTURE: Basic Array Operations (Methods)

// const friends = ['Kitty', 'Brandi', 'Sam'];
// console.log(friends)
// //ADD ELEMENTS
// friends.push('Nick');


// console.log(friends)


// friends.unshift('Ty');
// console.log(friends)

// //REMOVE ELEMENTS

// friends.pop();
// friends.pop();

// console.log(friends)

// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Kitty'))

// console.log(friends.includes('Kitty'));
// console.log(friends.includes('Nick'))



// LECTURE: Introduction to Objects
// const steve = {
//     firstName: 'Steve',
//     lastName: 'Clair',
//     age: 2021 - 1983,
//     job: 'Electronic Technician',
//     friends: ['Kitty', 'Brandi', 'Sam']
// }

// console.log(steve)

// LECTURE: Dot vs. Bracket Notation

// console.log(steve.lastName);
// console.log(steve['lastName'])

// const nameKey = 'Name'

// console.log(steve['first' + nameKey]);
// console.log(steve['last' + nameKey])

//Does not work with dot notation --> console.log(steve.'last' + nameKey);

// const interestedIn = prompt('What to you want to know? Enter firstName,  lastName, age, job, friends, location, twitter, or bestFriend')
// console.log(steve[interestedIn])

// if (steve[interestedIn]) {
//     console.log(steve[interestedIn])
// } else {
//     console.log('Wrong request input. Enter firstName lastName, age, job, or friends')
// }

// steve.location = 'NE Ohio';
// steve['twitter'] = false;


// //Challenge
// // Steve has three friends, but  his best friend is Kitty.

// let bestFriend = `${steve.firstName} has ${steve.friends.length} friends, but  his best friend is ${steve.friends[0]}`

// console.log(bestFriend);



// LECTURE: Object Methods

const steve = {
    firstName: 'Steve',
    lastName: 'Clair',
    birthYear: 1983,
    currentYear: 2021,
    job: 'Electronic Technician',
    friends: ['Kitty', 'Brandi', 'Sam'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }

    // calcAge: function (birthYear) {
    //     return this.currentYear - this.birthYear;
    // }

    // calcAge: function () {
    //     this.age = 2021 - this.birthYear;
    //     return this.age;
    // },

    // getSummary: function () {
    //     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDriversLicense === true ? `has` : `does not have`} a driver's license.`
}
// }

// console.log(steve.calcAge())
// console.log(steve.age)

//Challenge
//'Steve is a 38 year old Electionic Technician, and he as/does not have  a driver's license'

// console.log(steve.getSummary())


// LECTURE: Iteration: The for Loop
// console.log('Lifting weight rep 1.')


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight rep ${rep}.`)
// }




// LECTURE: Looping Arrays, Breaking and Continuing
const steveC = [
    'Steve',
    'Clair',
    2021 - 1983,
    'Electronic Techncian',
    ['Kitty', 'Sam', 'Brandi'],
    true
]



const type = [];



// for (let i = 0; i < steveC.length; i++) {
//     console.log(steveC[i], typeof steveC[i])

//     //filling an array (type)
//     // type[i] = typeof steveC[i]

//     type.push(typeof steveC[i]);

// }
// console.log('types: ', type);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2020 - years[i]);

}

// console.log(ages);


//Continue and Break
// console.log('---ONLY STRINGS---')
for (let i = 0; i < steveC.length; i++) {

    if (typeof steveC[i] !== 'string') continue;

    // console.log(steveC[i], typeof steveC[i])
}

// console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < steveC.length; i++) {

    if (typeof steveC[i] !== '') continue;

    // console.log(steveC[i], typeof steveC[i])
}


// LECTURE: Looping Backwards and Loops in Loops


//Looping Backwards
// for (let i = steveC.length - 1; i >= 0; i--) {
//     console.log(i, steveC[i])
// }

// //Loops in Loops


// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----Starting Exercise ${exercise}----`);

//     for (let reps = 1; reps < 6; reps++) {
//         console.log(`Lifting weight repetition: ${reps}`)
//     }
// }


// LECTURE: The while Loop

// A for loop for comparision
// console.log('---The for loop---')
// for (let rep = 1; rep <= 10; rep++) {


//     console.log(`Lifting weight rep ${rep}.`)
// }


// console.log('---The while loop---')
// let rep = 1;
// while (rep <= 10) {

//     console.log(`Lifting weight rep ${rep}.`)
//     rep++
// }

//Example: Roll the dice until it reaches six. once it rolls six, the loop will stop

// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice);


// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...')

// }

