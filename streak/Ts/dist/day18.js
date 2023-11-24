"use strict";
// Problem Description:
// Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.
// Inputs:
// An array of numbers.
// Outputs:
// An array of numbers where each number is doubled.
const doubleValues = (num) => num * 2;
const arr = [1, 2, 3, 4, 5, 6];
const doubledArr = arr.map(doubleValues);
console.log(doubledArr);
