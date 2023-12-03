// --> Truly and falsy values

// let check: any = NaN;
//
// console.log((check) ? "Truly" : "Falsy")

// Primitive data types

// let firstPerson : string = "Adam";
//
// let secondPerson : string = firstPerson;
//
// firstPerson = "Rogers";
//
// console.log(`The first person name is ${firstPerson}`);
// console.log(`The Second person name is ${secondPerson}`);

// Reference Type data types
// Array and Objects

type Person =  {
    name : string,
    age : number,
    numb ?: number
}

const p1 : Person = {
    name : "saran",
    age:20,
}

const p2 : Person = p1;
p2.name = "Satish";

console.log(`The user 1 is ${p1.name} and the user 2 is ${p2.name}`)





