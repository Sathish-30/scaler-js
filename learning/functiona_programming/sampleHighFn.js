const transaction = [1000 , 3000 , 4000 , 2000 , -898 , 3800 , -4500];

const inrToDollar = 80;

const total = transaction.filter(e => e > 0).reduce((acc , e) => acc + e, 0);

console.log(total);

const deposit = transaction.findIndex(e => e < 0);

// console.log(deposit);

//
// const filterTransaction = transaction.reduce((acc , transaction) => {
//     return acc + transaction;
// } , 0);
// console.log(filterTransaction)
let sum = 0;
transaction.forEach(function myFunc(e){
    sum += e;
} );
console.log(sum)