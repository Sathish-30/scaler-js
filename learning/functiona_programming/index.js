const imperative = (a) => {
    const aSquare = a * a;
    if(aSquare % 2 === 0){
        return "Given square number is even";
    }else{
        return "Given square number is odd";
    }
}

const declarative = (x) => (x * x) % 2 === 0 ? "Given square number is even" : "Given square number is odd";

console.log(declarative(10));