function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2 // yes we can give a new property to a function

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

// This clarifies that everything inside JS is somewhat an object. Function is a function as well as an object.

function createUser(username, score){
    // username = username // this can create confusion between which one is variable and which one is parameter
    this.username = username // hence we should use this code. 'this' keyword sets a current context
    this.score = score
}

// creating a new functionality(or method) inside prototype
createUser.prototype.increment = function(){
    this.score++ 
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`); // this ka matlab jis (meaning jisne bhi bulaya hai uska score dikha do)
    
}

const chai = new createUser("chai", 25) // here, 'new' keyword helps in ensuring that two new functionalities(increment and printMe), that has been added inside prototype of createUser, are accessible to chai.
const tea = new createUser("tea", 250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/