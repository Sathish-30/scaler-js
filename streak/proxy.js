// Description:
// Create a proxy object that intercepts and logs all property access.
// Solution Approach:
// Use the Proxy object to create a wrapper around another object.

const person = {
    name : "sathish",
    age : 20,
}

const createProxy = (target) => {
    return new Proxy(target , {
        get(target, p, receiver) {
            console.log(`Accessed property is ${p}`);
            return Reflect.get(target , p , receiver);
        }
    })
}

const proxy = createProxy(person);
console.log(proxy.name);
console.log(proxy.age);