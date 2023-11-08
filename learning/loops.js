// loops are the statements that we can used to control a
// flow of the program and to do some repetitive

// -> Basic Looping statement

// const name = "sathish";
// let i = 0;
// for (let j = 0; j < 10 ; ++j) {
//     console.log(j)
// }

// While looping statement

// let i = 1;
// while(i <= 10){
//     console.log("Sathish");
//     i++;
// }

// Do while
// Do while will run for atleat once , whether the condition is true or not

// let i = 11;
// do{
//     console.log("Check");
//     i++;
// }while(i <= 10)

// -> For Loop with 'of' keyword which will traverse with the array elements
// Print sum of squares of array elements

// const arr = [1 , 2 ,3 ,4 ,5 ,9 , 11];
// let sum = 0;
// // We can't reassign to the const keyword
// for(let e of arr){
//     sum += e * e;
// }
// console.log(sum)

const colors = ["red", "blue", "green"];

// for in loop will give the key value of the objects , where array
// is also a object , where the key value for the object is their index

for(let  color of colors){
    console.log(index+" ->  "+color);
}

// for of loop requires a iterable object to iterate over it