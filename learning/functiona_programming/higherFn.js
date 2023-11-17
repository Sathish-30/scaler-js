
const squareNum = (n) => n * n;
const squareArrOfNum = (arr , squareNum) => {
    arr.forEach(e => console.log(`The square number of ${e} is ${squareNum(e)}`))
}

let arr = [1 , 2 ,3 , 4 ,5];

// squareArrOfNum(arr , squareNum);

// Higher order function

const resArr = arr.map((e) => e * e);

console.log(resArr);