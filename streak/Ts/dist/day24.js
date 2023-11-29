"use strict";
const debounce = (func, time) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, time);
    };
};
const example = () => {
    console.log("Function called");
};
const debouncedFunction = debounce(example, 1000);
debouncedFunction();
debouncedFunction();
debouncedFunction();
