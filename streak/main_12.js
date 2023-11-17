const time = setInterval(() => {
    const date = new Date();
    console.log(`The Time is ${date.toLocaleTimeString()}`);
} , 1000);

setTimeout(() => clearInterval(time) , 10000);