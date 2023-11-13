// Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2]]

const subSet = (arr , len , index = 0 ,res = [] , currentSubset = []) => {
    if(currentSubset.length === len){
        // Spread operator is used to add the copy of the old array element to the new array
        res.push([...currentSubset].reverse());
        return;
    }
    if(index >= arr.length){
        return;
    }
    currentSubset.push(arr[index]);
    subSet(arr ,len , index + 1 , res , currentSubset);
    currentSubset.pop();
    subSet(arr , len , index + 1 , res , currentSubset)
    return res;
}

let len = 2;
let arr = [1 , 2 , 3];
let result = subSet(arr , len);
console.log(result)