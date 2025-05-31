const arr = [0, 1, 2, 3, 4, 5]; // JS arrays are resizeable and can contain a mix of different datatypes
const heroes = ["shaktimaan", "ironman"];

const arr2 = new Array(1, 2, 3, 4) //another way of declaring arrays

// console.log(arr[0]);

// Array Methods

// arr.push(6);
// arr.push(7);
// arr.pop();

// arr.unshift(9);
// arr.shift();

// console.log(arr.includes(9))
// console.log(arr.indexOf(3))

// const newArr = arr.join() // this method returns elements of array in strings

// console.log(arr); // output -> [0, 1, 2, 3, 4, 5]
// console.log(newArr); // output -> 0, 1, 2, 3, 4, 5
// console.log(typeof arr); // output -> object
// console.log(typeof newArr); // output -> string

console.log("A ", arr); // output -> A [0, 1, 2, 3, 4, 5]

const arr3 = arr.slice(1, 3)

console.log(arr3); // output -> [1, 2]
console.log("B ", arr) // output -> B [0, 1, 2, 3, 4, 5]

const arr4 = arr.splice(1, 3)
console.log(arr4); // output -> [1, 2, 3]
console.log("C ", arr) // output -> C [0, 4, 5]

// slice doesn't manipulate original array but splice does.