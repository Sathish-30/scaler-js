// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

const findFirstNotRepeatedCharacter = (str) => {
    const arr = [];
    for (let ele of str){
        if(arr[ele] === undefined){
            arr[ele] = 1;
        }else{
            arr[ele] += 1;
        }
    }
    for (let ele of str){
        if(arr[ele] === 1){
            return ele;
        }
    }
}

const str = "abacddbec";
const firstNotRepeatedCharacter = findFirstNotRepeatedCharacter(str);
console.log(`The first not repeated character of the string ${str} is ${firstNotRepeatedCharacter}`);