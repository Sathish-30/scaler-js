// Problem Description:
// Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.
// Inputs:
// An array of numbers.
// Outputs:
// A boolean value. Return true if all numbers are positive, otherwise false.

const allPositive = (n : number) : boolean => {
    return n > 0;
}

const numArr : number[] = [1, 2 , 3 ,4, 5, 6 , 1];
const res : boolean = numArr.every(allPositive);
console.log(res);