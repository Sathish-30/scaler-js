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
