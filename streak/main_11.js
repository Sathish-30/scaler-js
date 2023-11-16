// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

const returnProperties = (obj) => {
    return Object.keys(obj).join(", ");
}

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
}

const propertiesOfStudent = returnProperties(student);
console.log(`The properties of the student object is ${propertiesOfStudent}`);