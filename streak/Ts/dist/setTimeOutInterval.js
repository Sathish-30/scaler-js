"use strict";
// SetTimeOut in Typescript
/*
console.log("Before setTimeOut");

setTimeout(() => console.log("Greeting") , 2000);

console.log("After setTimeOut");
*/
// SetInterval in Typescript
let timer = setInterval(() => console.log("Hello"), 1000);
setTimeout(() => clearInterval(timer), 5000);
