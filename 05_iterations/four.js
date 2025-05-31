// for in loop

const obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in obj) {
    // console.log(key) // output -> js cpp rb swift
    // console.log(obj[key]) // output -> javascript C++ ruby swift by apple
    // console.log(`${key} shortcut is for ${obj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // output -> 0 1 2 3 4
    // console.log(programming[key]); // output -> js rb py java cpp

}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }

// Map is not iterable here.