const userEmail = []

// if(userEmail) {
//     console.log("got email");
// }
// else {
//     console.log("Don't have user email");
// }

// falsy values 
// false, 0, -0, BigInt, 0n, undefined, null, "", NaN 

// truthy values
// "0", 'false', " ", [], {}, function(){}

// how to detect empty array
// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

// how to detect empty object
const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// console.log(false == 0) // true
// console.log('' == false) // true
// console.log(0 == '') // true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Ternary Operator (?)
// condition ? true : false 

const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("more than 80") : console.log("Less than 80")

