// Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.
// Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.
// Solution Approach: Use async/await within a for...of loop.

const printAsync = async (arr : number[]) : Promise<void> => {
    for(let i of arr){
        await printWithSetTimeOut(i);
    }
}

const printWithSetTimeOut = (e : number) : Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(`The number is ${e}`);
            resolve();
        },1000);
    })
}


const numAr : number[] = [1 , 2 , 3 , 4, 5 ,6];
printAsync(numAr);