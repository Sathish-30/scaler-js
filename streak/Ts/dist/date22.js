"use strict";
// Problem Statement: Write a function to deeply compare two objects for equality.
// Description: Given two objects, the function should return true if they are deeply equal and false otherwise.
const compareDeeEqual = (a, b) => {
    const keys = Object.keys(a);
    for (let key of keys) {
        // @ts-ignore
        const v1 = a[key];
        // @ts-ignore
        const v2 = b[key];
        // @ts-ignore
        if (typeof a[key] === 'object' && typeof b[key] === 'object') {
            // @ts-ignore
            compareDeeEqual(a[key], b[key]);
        }
        else { // @ts-ignore
            if (typeof a[key] !== typeof b[key]) {
                return false;
            }
            if (v1 !== v2) {
                return false;
            }
        }
    }
    // console.log(keys)
    return true;
};
const u1 = {
    uId: 1,
    uName: "sadhu",
    address: {
        area: "Anbu nagar",
        city: "Cbe"
    }
};
const u2 = {
    uId: 1,
    uName: "sadhu",
    address: {
        area: "Anbu nagar",
        city: "Cbe"
    }
};
console.log(compareDeeEqual(u1, u2));
