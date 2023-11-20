//Write a program to create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
// Test Data :
// console.log(string_chop('Scaler'));
// console.log(string_chop('Scaler',2));
// ["Scaler"]
// ['Sc' , 'al' ,'er']

const string_chop = (str , size = 0) => {
    const res = [];
    if(size === 0){
        res.push(str);
        return res;
    }
    let len = str.length;
    for(let i = 0 ; i < len ; i+=size){
        res.push(str.slice(i , i + size));
    }
    return res;
}
console.log(string_chop("scaler"));
console.log(string_chop("scaleracademy" , 2));