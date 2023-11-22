// Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.
// Inputs:
// An array of numbers.
// Outputs:
// An array of numbers without odd numbers.

const filterOutOdd = (n) => {
        return n % 2 === 0;
}

const arr = [1 , 2 , 3 , 4 , 5 , 6];
const arrOfEven = arr.filter(filterOutOdd);
console.log(arrOfEven)