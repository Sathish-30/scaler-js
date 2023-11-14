const arr=  [1 , 2, , 4 ,5 , 6 ,7];

let [a , b , c, d ,e] = arr;

const person = {
    name : "sathish",
    age : 20,
    address : {
        city : "coimbatore",
        location : "Tamil Nadu",
    }
}

const {name , age , address : {city}} = person;
console.log(name , age , city);