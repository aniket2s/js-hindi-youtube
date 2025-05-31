const name = 'aniket'
const repocount = 90

// console.log(name + repocount + " value"); 

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // prefer to use this

const gameName = new String('hitesh-hc-com'); // another way of declaring and initialising strings

console.log(gameName); // [String: 'hitesh-hc-com']
console.log(typeof gameName); // object 
// console.log(gameName[0]);
// console.log(gameName.__proto__); // output will be an empty object -> {}
 
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4); // substring method cannot have negative input value
// console.log(newString); // output -> hite

const anotherString = gameName.slice(-12, 4); // slice method can have negative input value
// console.log(anotherString); // output -> ite 

const newStringOne = "    jitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // it will clear all the spaces and print output

const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'));

// console.log(url.includes('sun'));

console.log(gameName.split('h')); // returns an array of strings