const arr = ["js", "ruby", "java", "python", "cpp"]

// arr.forEach(function(val) {
//     console.log(val);
// })

// arr.forEach((val) => {
//     console.log(val);
// })

// function  printMe(item) {
//     console.log(item);
// }

// arr.forEach(printMe); //  This way is also possible

// arr.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

//Note: forEach loop has access of elements, indices and whole array as parameter

const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})