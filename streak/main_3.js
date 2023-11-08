// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
// Return true if either of them falls within the range.

const checkRange = (num1 , num2) => {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) ;
}

let num1 = 81;
let num2 = 20;
if(checkRange(num1, num2)){
    console.log("Any one of the number lies within the range 50 - 99")
}else{
    console.log("None of the number lies within the range 50 - 99")
}

