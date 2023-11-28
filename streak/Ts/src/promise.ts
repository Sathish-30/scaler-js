// How to produce a promise

let promise : Promise<string> = new Promise((resolve , reject)  => {
    const ab : number = 4;
    const ac : number = 5;
    setTimeout(() => {
        if(ab === ac){
            resolve("Successful")
        }else{
            reject("Failed");
        }
    } , 1000);
});

promise.then((result : string) => {
    console.log(result);
}).catch((err) => console.log(`An error has been occurred`))