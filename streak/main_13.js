// Problem Statement: Implement a memoization function.
// Description: Write a function that takes a function as its argument and returns a memoized version of the function.
// Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.

const fibMemoization = (n , cache) => {
    cache = cache || {};
    if (cache[n]) return cache[n];
    if(n <= 1) return n;
    return cache[n] = fibMemoization(n - 1 , cache) + fibMemoization(n - 2 , cache);
}
const n = 8;
console.log(`The fibonacci of the number ${n} is ${fibMemoization(n)} , which has been determined by memoization`);