'use strict';

console.log(this);

function displayThis(){
    console.log(this);
}

displayThis();

const obj = {
    name : "sathish",
    age : 21,
    myFn : function(){
        console.log(this);
    }
}

obj.myFn();


const obj1 = {
    name : "sathish",
    age : 21,
    myFn1 : function(){
        function child(){
            console.log(this);
        }
        child();
    }
}

obj1.myFn1();
