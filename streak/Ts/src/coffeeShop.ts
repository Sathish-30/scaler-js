const placeOrder = (drink: string) : Promise<string> => {
    return new Promise((resolve, reject) => {
        if(drink === 'coffee'){
            resolve("Order for Coffee received");
        }else{
            reject("Other orders rejected" );
        }
    });
};



const processOrder = (order : string) : Promise<string> => {
    return new Promise((resolve) => {
        console.log("Order is being processed");
        resolve(order + "is Served");
    });
}

placeOrder("coffee").catch(err => console.log(err));
// chaining of promises
// placeOrder("coffee").then((res: string) : Promise<string> => {
//     console.log(res);
//     return processOrder(res);
//     }).catch((err) => console.log(err)).then((processedOrder) => console.log(processedOrder));

const serveOrder = async (order: string): Promise<void> => {
    try {
        const orderPlaced: string = await placeOrder(order);
        console.log(orderPlaced);
        const processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);c
    } catch (err) {
        console.log(err)
    }
}

serveOrder("tea");