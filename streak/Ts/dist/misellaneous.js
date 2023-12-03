"use strict";
// --> Truly and falsy values
const p1 = {
    name: "saran",
    age: 20,
};
const p2 = p1;
p2.name = "Satish";
console.log(`The user 1 is ${p1.name} and the user 2 is ${p2.name}`);
