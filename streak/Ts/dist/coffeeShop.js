"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const placeOrder = (drink) => {
    return new Promise((resolve, reject) => {
        if (drink === 'coffee') {
            resolve("Order for Coffee received");
        }
        else {
            reject("Other orders rejected");
        }
    });
};
const processOrder = (order) => {
    return new Promise((resolve) => {
        console.log("Order is being processed");
        resolve(order + "is Served");
    });
};
placeOrder("coffee").catch(err => console.log(err));
// chaining of promises
// placeOrder("coffee").then((res: string) : Promise<string> => {
//     console.log(res);
//     return processOrder(res);
//     }).catch((err) => console.log(err)).then((processedOrder) => console.log(processedOrder));
const serveOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderPlaced = yield placeOrder(order);
        console.log(orderPlaced);
        const processedOrder = yield processOrder(orderPlaced);
        console.log(processedOrder);
        c;
    }
    catch (err) {
        console.log(err);
    }
});
serveOrder("tea");
