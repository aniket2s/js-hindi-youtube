const score = 400
// console.log(score);

const balance = new Number(100);
// console.log(balance); // [Number: 100]
// console.log(typeof balance); // object

let balanceNum = balance.toString()
// console.log(balanceNum); // 100 
// console.log(typeof balanceNum); // string

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00


const otherNum = 23.8966
// console.log(otherNum.toPrecision(4));  // 23.90

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

//*****************************Maths*****************************

// console.log(Math); // Object [Math] {} -> it is an object that has many properties
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random()); // gives a value between 0 and 1
// console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 