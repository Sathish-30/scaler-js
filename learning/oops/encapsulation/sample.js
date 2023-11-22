// class Person {
//     let name
//     constructor(_name, age) {
//         this.name = _name;
//         this.age = age;
//     }
//
//     getName = function(){
//         return this.name;
//     }
// }

function Person(_name , _age){
    var name = _name;
    this.age = _age;

    this.getName = function(){
        return name;
    }
}

const person = new Person("Sathish",21);
console.log(person);
person.name = 'Rowdy'
console.log(person.name);