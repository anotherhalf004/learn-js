//------THIS - in different scenarios-------//
/*

global - window
function - window
method with es5 func - object
method with es6 arrow fnc - window
es5 function inside es5 method - window
arrow fnc inside es5 method - object
event handler - element on which event is being handled
class - blank object

*/

let obj = {
    name : "sun",
    sayName : function(){
        console.log(this);
    }
}

obj.sayName();

///

document.querySelector("h1").addEventListener("click",function() {
    console.dir(this.textContent = "lol");
});

///

class abcd{
    a=12;
    constructor(){
        console.log("hallo");
        console.log(this);
    }
}

let a = new abcd;
///

// call apply bind

let obj1 = {
    name: "nomnom"
}

function fn(param1,param2,param3) {
    console.log(this,param1,param2);
}
fn.call(obj1);
fn.apply(obj1,[1,2,3]);

let fn1 = fn.bind(obj1,1,2,3);
fn1();
