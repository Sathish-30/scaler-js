// Implement a debounce function that takes a function and a delay as arguments.
// The returned function should ensure that the original function is not called more than once in the specified delay.

const debounce = (func: () => void, time: number) : () => void => {
    let timer : number;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            func()
        }, time);
    }
}

const example = () : void => {
    console.log("Function called");
}

const debouncedFunction = debounce(example , 1000);

debouncedFunction();
debouncedFunction();
debouncedFunction();
