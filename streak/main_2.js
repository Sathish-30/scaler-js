// Write a program to convert the first letter of each word into upper case
// input string : the quick brown fox
// output string : The Quick Brown Fox
const capitalizeString = (str) => {
    let strArr = str.split(" ");
    for(let e in strArr){
        strArr[e] = strArr[e].charAt(0).toUpperCase() + strArr[e].slice(1);
    }
    return strArr.join(" ");
}

console.log(capitalizeString("the quick brown fox"))