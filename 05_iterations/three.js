// for-of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val); // output -> 1 2 3 4 5 
    
}

const greetings = "Hello World"

for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    else{
        console.log(`Each char is ${greet}`);
    }
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value); // IN :- India
    // console.log(key); // IN USA Fr
}

const obj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of obj) {
    // console.log(key, ':-', value); // obj is not iterable
// }

// Note : for of loop doesn't work on objects.