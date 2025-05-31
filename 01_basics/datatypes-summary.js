// How any data is stored in memory and how it is accessed determines if it is Primitive or non-primitive data.

// Primitive Datatype -> 7 types
// String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreVal = 100.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =  Symbol('123')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);

// Reference Type 
// Array, Object, Function

const heroes = ["Shaktimaan", "naagraj", "doga"];

let myObj = {
    name : "hitesh",
    age: 22,
}

const myFun = function() {
    console.log("Hello World");
}

// myFun();

console.log(typeof score)
console.log(typeof scoreVal)
console.log(typeof isLogged)
console.log(typeof outsideTemp)
console.log(typeof userEmail) 
console.log(typeof id)
console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof myFun)

// ***********************************Stack and Heap Memory*****************************

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "hitesh"

let anothername = myYoutubename

anothername = "chaiaurcode"

// console.log(anothername);
// console.log(myYoutubename);

let user1 = {
    email : "user@google.com",
    upi : "user@ybl",
}

let user2 = user1;
user2.email = "hitesh@google.com"

// console.log(user1.email);
// console.log(user2.email);