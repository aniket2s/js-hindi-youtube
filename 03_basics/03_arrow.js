const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// 'this' refers current context

// user.welcomeMessage(); // hitesh, welcome to website
// user.username = "Sam"
// user.welcomeMessage(); // Sam, welcome to website

// console.log(this); // output -> {} because we don't have any context globally right now and as we are in node therefore, output is an empty object.

// Notes : When we run console.log(this); in browser then we get window object in output because in browser global object is window object.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // output -> undefined because we are not able to use 'this' keyword here in function as we were using in object above.
// }

// chai();

// Another way of writing a function

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username); // same output as above 
// }

// chai();

// Arrow function

const chai = () => {
    let username = "hitesh"
    console.log(this); // {}
}

// chai();

// =================== Arrow Function ====================

// Basic Arrow Func

// const add2 = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return

// const add2 = (num1, num2) => num1 + num2 // we can use this 

const add2 = (num1, num2) => (num1 + num2) // and we can use this as well.

// console.log(add2(3, 4));

// Notes : When we use basic arrow func syntax then we have to use return keyword as we will be using curly braces 
// but when we are using implicit return syntax then we don't have to use return keyword and we can use parenthesis.

// const add = () => {
//     return {username: "hitesh"}
// }

// Returning an object implicitly 
// const add = () => {username: "hitesh"} // output -> undefined because we must use parenthesis while returning an object
const add = () => ({username: "hitesh"});

console.log(add()); // output ->  {username: "hitesh"}