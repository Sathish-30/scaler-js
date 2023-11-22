// let person = {
//     name:"sathish",
//     age:21
// }

// console.log(person.hasOwnProperty("name"));

// console.log(person);

function Person (name , age){
    this.name = name;
    this.age = age;
    this.getName = function (){
        return name;
    }
}

let person = new Person("Rowdy" , 21);
console.log(person);