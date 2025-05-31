// Map method

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.map( (num) => num + 10 ) // returns each nums after adding 10 to them

// const newNums = []
// nums.forEach( (num) => {
//     num = num + 10;
//     newNums.push(num)
// })

//Chaining
const newNums = nums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums); // [41, 51, 61, 71, 81, 91, 101]

