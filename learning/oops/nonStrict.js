// Non Strict Mode

// console.log(this); // Empty object

function displayThis(){
    console.log(this);
}

// displayThis();

// Create a function inside a object is called methods
const myObj = {
    name : "sathish",
    age : 21,
    myfn : function(){
        console.log(this);
    }
}

// myObj.myfn();

const myObj2 = {
    name : "sathish",
    age : 21,
    myfn1 : function(){
        function child(){
            console.log(this);
        }
        child();
    }
}

myObj2.myfn1();