"use strict";
let firstPerson = {
    name: "adem",
    age: 23,
};
let secondPerson = Object.assign({}, firstPerson);
firstPerson.name = "sathish";
console.log(firstPerson.name + " " + secondPerson.name);
