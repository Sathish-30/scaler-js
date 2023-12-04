// Prototype

function Person(name , age){
  this.name = name;
  this.age = age;
  // this.getName = function(){
  //   console.log(`The Person name is ${this.name} and age is ${this.age}`)
  // }
}

// The below function will create the function in the prototype
Person.prototype.getName = function(){
  console.log(`The Person name is ${this.name} and age is ${this.age}`)
}

// The call , apply and bind method are used in oops concept in js
// call is used to call the fn of a object and apply is used as same but argument are passed as an array

const person1 = new Person("sathish",11);
let person2 = {
  name : "john",
  age : 12,
}

const printDetails = function(city){console.log(`The name is ${this.name} and age is ${this.age} and city is ${city}`)}

let person3 = {
  name : "rowdy",
  age : 12,
}
printDetails.call(person3 , "Coimbatore");

person1.getName();
console.log(person2);
