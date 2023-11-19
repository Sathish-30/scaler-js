// Write a JavaScript function to concatenate a given string n times

const repeat = (str , iterate = 1) => {
    return str.repeat(iterate);
}

console.log(repeat("Ha!"));
console.log(repeat("Ha!" , 2));
console.log(repeat("Ha!" , 3));