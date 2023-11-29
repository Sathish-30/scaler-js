// How to produce a promise

let promise : Promise<string> = new Promise((resolve , reject):void  => {
    const ab : number = 5;
    const ac : number = 5;
    setTimeout(() => {
        if(ab === ac){
            resolve("Successful")
        }else{
            reject("Failed");
        }
    } , 1000);
});

// Fulfilled stage
promise.then((res : string) : void => {
    console.log("fulfilled stage")
}).catch((err) => console.log("rejected stage"));