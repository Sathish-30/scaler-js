"use strict";
// How to produce a promise
let promise = new Promise((resolve, reject) => {
    const ab = 5;
    const ac = 5;
    setTimeout(() => {
        if (ab === ac) {
            resolve("Successful");
        }
        else {
            reject("Failed");
        }
    }, 1000);
});
// Fulfilled stage
promise.then((res) => {
    console.log("fulfilled stage");
}).catch((err) => console.log("rejected stage"));
