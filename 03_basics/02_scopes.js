var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // hitesh
    }
    // console.log(website); // out of scope

    two();
}

// one();

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website); // hitesh youtube
    }
    // console.log(website); // out of scope
}

// console.log(username); // out of scope


// ================================ Interesting ==================================

// Basic functions
console.log(add1(5)); // It will give output without any error

function add1(num){
    return num + 1
}


// Expressions
// add2(5); // It will throw an error as add2 will not be accessible in this case.

const add2 = function(num){
    return num + 2
}
