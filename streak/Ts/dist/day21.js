"use strict";
// Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.
// Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.
// Solution Approach: Use async/await within a for...of loop.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const printAsync = (arr) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i of arr) {
        yield printWithSetTimeOut(i);
    }
});
const printWithSetTimeOut = (e) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`The number is ${e}`);
            resolve();
        }, 1000);
    });
};
const numAr = [1, 2, 3, 4, 5, 6];
printAsync(numAr).then(r => console.log(r));
