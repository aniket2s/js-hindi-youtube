// object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("User details");
        // console.log(`Username: ${username}`); // ReferenceError: username is not defined
        console.log(`Username: ${this.username}`); // Username: hitesh
        console.log(this); // whole object will get printed
    }
}

// console.log(user.getUserDetails());
// console.log(this); // {}


// Constructor Function ('new') (this function gives a new instance everytime)

function anyuser(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const user1 = new anyuser("hitesh", 12, true)
const user2 = new anyuser("chai", 11, false)
// console.log(user1); // anyuser { username: 'hitesh', loginCount: 12, isLoggedIn: true }
// console.log(user2); // anyuser { username: 'chai', loginCount: 11, isLoggedIn: false }

console.log(user1.constructor); // [Function: anyuser]

// Notes: whenever we will use 'new' keyword then a new object{} gets created always.
// After that a constructor function gets called because of 'new' keyword.
// Then, using 'this' keyword we can inject all arguments in new instance that has been created and then it gets returned to us.