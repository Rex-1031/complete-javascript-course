// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*Using Google, StackOverflow and MDN

PROBLEM 1:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

1) Understanding the problem.
    Q:What is temperature amplitude?
    A: Difference between the highest and lowest temp.

    Q: How to compute the max and min temps?


    Q: What's a sensor error and what happens when it occurs?



2) Breaking it up into sub-problems
    - How to ignore errors.
    - Find the max values in array
    - Find the min value in the array.
    - Subtract min from max (amplitude) and return it
*/
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curtemp = temps[i];

    if (typeof curtemp !== "number") continue;
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log("Max Temp: ", max, "Min Temp: ", min);
  return max - min;
};

calcTempAplitude([3, 7, 4]);
const amplitude = calcTempAplitude(temperatures);
console.log("Temperature Amplitude: ", amplitude);

/*
PROBLEM 2:
Function should now receive 2 arrays of temps

1) Understanding the problem
- With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

2) Breaking up into sub-problems
- Merge 2 arrays
*/

const calcTempAplitude2 = (t1, t2) => {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curtemp = temps[i];

    if (typeof curtemp !== "number") continue;
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log("Max Temp: ", max, "Min Temp: ", min);
  return max - min;
};

const amplitude2 = calcTempAplitude2([3, 5, 1], [9, 0, 5]);
console.log("Temperature Amplitude: ", amplitude2);

/*Debugging with the console and breakpoints*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius")),
  };
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

/* 
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]



*/
