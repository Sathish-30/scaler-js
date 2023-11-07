let n = 32243;
let sum = 0;
let temp = n;
while(temp > 0){
    let rem = temp % 10;
    sum = (sum * 10) + rem;
    temp = Math.floor(temp / 10);
}

console.log(`The number to be reversed is ${n} and the reversed number is ${sum}`)