//----------MODULE pattern-----------//

//iife
// iife ke andr saare methods , var's are PRIVATE and cannot be accesssed outside it
// to use a method or var , we have to return it/them(multiple) in a OBJECT to use them publicly

/*
let Bank = (function(){
    let bal = 20;
    return bal;

})();
console.log(Bank); -------> 20
*/
/*
let Bank = (function(){
    let bal = 20000;
    
    function checkBal(){
        console.log(bal);
    }

    function withdraw(val){
        bal -= val;
        console.log(bal);
    }

    return {
        checkBal,
        withdraw
    }

})();

Bank.checkBal();
Bank.withdraw(10000);
*/
/*
//--------REVEALING MODULE pattern----------//
    just give a new name to the returning functions

    return {
    check : checkBal,
    draw : withdraw
    }

    and then Bank.check();
*/

//-----FACTORY FUNCTION Pattern-----// => ek func joh objects create krta hai / return krta hai without using class or `new` keyword
// main idea is object creation ko ek func ke thr control krna 

// we get a new object which can contain methods or (if needed) private data 

// Useful when - { we want ek hi type ke bht saare objects chahiye , like users, products, tasks, etc...}
//---------//

/*
function createProduct(name , price){
    let stock = 100;
    return {
        name,
        price,
        checkStock(){
            console.log(stock);
        },
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`${qty} booked -  ${stock} left`);
            } else {
                console.log(`only ${stock} left`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`refilled - ${stock} pieces now`);
        }
    }

}

let nvidia = createProduct("nvidia",50);

console.log(nvidia.name,nvidia.price);
console.log(nvidia.buy(10));
console.log(nvidia.refill(100));
*/

//-----OBSERVER Pattern-----//

class YT{
    constructor(){
        this.subscribers= [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name} has subscribed!`);
    }
    unsubscribe(user){
        this.subscribers.filter(sub => sub !== user);
        user.update(`${user.name} Unsubsribed`);
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    update(data){
        console.log(data);
    }
}

let tedx = new YT();
let user1 = new User("sunny");
let user2 = new User("pikachu")

tedx.subscribe(user1);
tedx.subscribe(user2);
tedx.notify('channel is ded');

tedx.unsubscribe(user2);