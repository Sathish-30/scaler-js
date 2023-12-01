// Write a function calculateTotal that takes an array of numbers,
// filters out the even numbers, squares the remaining numbers, and then calculates their sum.

const numArray : number[] = [1 , 2 , 3, 4 , 5 , 6 , 7 , 8 , 9];

const resultantAns : number = numArray.filter((e : number) : boolean => e % 2 === 0)
                                              .map((e : number) : number => e * e)
                                                    .reduce((sum : number, e : number) => sum + e , 0);
console.log(resultantAns);
