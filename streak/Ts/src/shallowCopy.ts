/// spread operator {...}
// Shallow copy
interface PersonUser {
    name : string,
    age : number
}

let firstPerson : PersonUser = {
    name : "adem",
    age : 23,
}

let secondPerson : PersonUser = {...firstPerson}

firstPerson.name = "sathish";

console.log(firstPerson.name + " " + secondPerson.name);


// Deep copy

let thirdPerson : PersonUser = JSON.parse(JSON.stringify(firstPerson)); 