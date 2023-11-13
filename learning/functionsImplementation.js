// Function declaration , Parameter and arguments

function add(num1 = 0 , num2 = 0 , num3 = 0){
    console.log(`The default value of n1 is ${num1} and n2 is ${num2} and n3 is ${num3}`);
}

// add(3 , 4);


// Function expression

// A function without a name is known as anonymous funciton

const addFunc = function (num1, num2) {
    return num1 + num2;
};

// console.log(addFunc(11 , 5));

// Hoisting in javascript

// console.log(a);
// greet();

function greet() {
    console.log("Greet users");
}

// addNumber();
var addNumber = function(){
    console.log(3 + 4);
}

// If we pass an argument but not accepting it as an parameter then it is considered to be a waste
function ad(){
    return 7 + 8;
}

console.log(ad(3 ,7));

