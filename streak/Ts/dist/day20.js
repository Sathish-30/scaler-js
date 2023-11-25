"use strict";
// Problem Description:
// Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.
// Inputs:
// An array of numbers.
// Outputs:
// A number representing the first negative number in the array or undefined if there are no negative numbers.
const findFirstNegative = (num) => {
    return num < 0;
};
const ar = [1, 2, 3, 4, 5, -2, 4, 9];
const firstNegativeNumber = ar.find(findFirstNegative);
console.log(`The negative number in the array is ${firstNegativeNumber}`);
