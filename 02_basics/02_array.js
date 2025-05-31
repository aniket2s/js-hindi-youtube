const heroes = ["thor", "Ironman", " spiderman"]
const dc = ["superman", "flash", "batman"]

// heroes.push(dc);

// console.log(heroes);
// console.log(heroes[3][1]);

const allHeroes = heroes.concat(dc);

// console.log(allHeroes); // output -> [ 'thor', 'Ironman', ' spiderman', 'superman', 'flash', 'batman' ]

const all_heroes = [...heroes, ...dc] // spread operator usage

// console.log(all_heroes); // output -> [ 'thor', 'Ironman', ' spiderman', 'superman', 'flash', 'batman' ]

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_arr = another_arr.flat(Infinity) //flat method

// console.log(real_arr); // output -> [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Jitesh")); // false
console.log(Array.from("Jitesh")); // [ 'J', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "jitesh"})); // [] -> interesting as its output will be an empty object because it couldn't convert into array because we are not defining to make array using keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]