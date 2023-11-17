// const name = (str , firstName , lastName) => {
//     const s = str.split(" ");
//     console.log(firstName(s[0]) , lastName(s[1]));
// }
// const lastName = (lastName) => {
//     return lastName;
// }
// const firstName = (firstName) => {
//     return firstName;
// }
//
// name( "sathish saravanan" , firstName , lastName);

const isEven = (num) => num % 2 === 0

const checkArr = (arr , evenFn) => {
    arr.forEach((ele) => console.log(`The number ${ele} is even : ${evenFn(ele)}`));
}

checkArr([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9] , isEven);