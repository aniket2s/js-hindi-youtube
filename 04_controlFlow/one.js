// if

const isUserLoggedIn = true
const temp = 41

// if( temp < 50 ){
//     console.log('less than 50')
// }

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if( score > 100 ){
//     let power = 'fly'
//     console.log(`User power: ${power}`); // User power: fly
// }

// console.log(`User power: ${power}`); // power is not defined because of scope issue


const balance = 1000

// if( balance > 500 ) console.log("test"), console.log('test2'); // It works but a bad practice

// if( balance < 500 ) {
//     console.log("Less than 500");
// }   
// else if ( balance < 750 ) {
//     console.log("Less than 750");
// }   
// else if ( balance < 900 ) {
//     console.log("Less than 900");
// }   
// else {
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allowed to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}