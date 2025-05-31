let score = "hitesh"

// console.log(typeof score);
// console.log(typeof(score)); 

let valInNumber = Number(score)
// console.log(typeof valInNumber); // output ->  number
// console.log(valInNumber); // Output -> NaN

// "33" => 33
// "33abc" => NAN
// true => 1 and false => 0
// undefined => NAN
// "hitesh" => NAN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn); // true

// 1 => true
// 0 => false
// "" => false , "anystring" => true

let someNumber = 33;

let stringNumber = String(someNumber)

// console.log(stringNumber); // output -> 33 (string)
// console.log(someNumber); // output -> 33 (number)
// console.log(typeof stringNumber); // output -> string
// console.log(typeof (stringNumber)); // output -> string

// ******************************** Operations ********************************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
// console.log(str3); // hello hitesh

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); // output -> 1
// console.log(+""); // output -> 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);