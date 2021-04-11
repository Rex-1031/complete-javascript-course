// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*Using Google, StackOverflow and MDN

PROBLEM 1:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

1) Understanding the problem.
    - What is temperature amplitude?
    A: Difference between the highest and lowest temp.

    Q: How to compute the max and min temps?
    Q: What's a sensor error and what happens when it occurs?
2) Breaking it up into sub-problems
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];