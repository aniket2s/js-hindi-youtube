function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("T");
}

// sayMyName -> this is a reference of function
// sayMyName() // this is execution of function

function add(number1, number2){
    console.log(number1 + number2);
}

function add2(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}

// add(3, null); // 3
// add(3, "4"); // 34
// add(3, "a"); // 3a
// add(3, 4); // 7

const result = add(3, 5);
const result2 = add2(3, 5);

// console.log("Result: ", result); // output -> Result: undefined because function add is only console printing it and not returning any value.
// console.log("Result: ", result2); // output -> Result: 8


function loginUserMessage(username = "ani"){
    if(!username){
        console.log("Please enter a username");
        return
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessage()); // ani just logged in
// console.log(loginUserMessage("hitesh")); // hitesh just logged in


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 600)) // rest operator prints all argument values given in an array -> output -> [500, 600]

const user = {
    username : "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username: "aniket",
    price: 399
})  // we can pass an object to a function directly like this

const arr = [200, 400, 100, 600]

function handleArray(getArray){
    console.log(getArray[2]);
}

// handleArray(arr);
handleArray([200, 400, 100, 600]); // // we can pass an array to a function directly like this