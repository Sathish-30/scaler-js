"use strict";
// Problem : Closure Challenge
// Description:
// Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.
// Solution Approach:
// Utilize closure to maintain the state of the counter.
const counter = () => {
    const increment = () => { c++; };
    increment();
};
let c = 0;
counter();
counter();
counter();
counter();
console.log(c);
