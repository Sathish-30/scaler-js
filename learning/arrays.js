// Array store multiple data in a single variable
// every element get a index
// Every data type element can be stored in a single array variable
// Starting index = 0 and ending index = n - 1 , where n is the length of the array variable
// Array contains a ordered collection of data

// The array element is of len 4
const arr = [12 , "sample" ,true ,12.4];
// We can access the array element with index

// Removes the last element from the array
const lastElement = arr.pop();
console.log(`The element pop : ${lastElement}`);

// Adds an element at the end of the array
arr.push(100);
console.log(arr);

// Removes the first element from the array
const firstElement = arr.shift();
console.log(firstElement);

// Adds an element at the beginning of the array

arr.unshift(200);
console.log(arr);