"use strict";
// How to produce a promise
let promise = new Promise((resolve, reject) => {
    const ab = 4;
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
promise.then((result) => {
    console.log(result);
}).catch((err) => console.log(`An error has been occurred`));
