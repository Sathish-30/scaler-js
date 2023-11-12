// Write a JavaScript program to check a pair of numbers
// And return true if one of the numbers is 50 or if their sum is 50.

// const sumOfArr = (arr) => {
//     let sum = 0;
//     for (let i of arr){
//         sum += i;
//     }
//     return sum;
// }
const checkNumbersFiftyOrSumIsFifty = (...arr) => {
    // reduce function is used to reduce a collection of numbers to a single number , where it is used to replace the sumOfArr function
    let sum = arr.reduce( (tot , num) => tot + num , 0);
    return arr.includes(50) || sum === 50;
}
let num1 = 10;
let num2 = 20;
let num3 = 50;
console.log(`The sum of pair of numbers is 50 or one of the number is fifty ${checkNumbersFiftyOrSumIsFifty(num1 , num2 , num3)}`)