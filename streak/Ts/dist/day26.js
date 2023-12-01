"use strict";
// Write a function calculateTotal that takes an array of numbers,
// filters out the even numbers, squares the remaining numbers, and then calculates their sum.
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultantAns = numArray.filter((e) => e % 2 === 0).map((e) => e * e).reduce((sum, e) => sum + e, 0);
console.log(resultantAns);
