// Strict Mode
'use strict';

// console.log(this);

function displayThis(){
    console.log(this);
}

// displayThis();

const myObj = {
    name : "sathish",
    age : 21,
    myFn : function(){
        console.log(this);
    }
}

// myObj.myFn();

const myObj1 = {
    name : "sathish",
    age : 21,
    myFn1 : function(){
        function child(){
            console.log(this);
        }
        child();
    }
}

myObj1.myFn1();