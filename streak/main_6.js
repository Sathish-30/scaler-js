// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum

const sumOfTwoNumbers = (a , b) => {
    return (a === b) ? a * 3 : a + b;
}

const num1 = 10;
const num2 = 12;
console.log(`The sum of two given integer is ${sumOfTwoNumbers(num1 , num2)}`)