// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const user = {
    name: 'hitesh',
    "full name": "Hitesh Chaudhary",
    [mySym]: "mykey1", // in this way we can refer symbol in an object
    age: 18,
    location: 'Jaipur',
    email: 'hitesh@google.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user.email);
// console.log(user["email"]); // another way of accessing
// console.log(user["full name"]);
// console.log(user[mySym]);
// console.log(typeof mySym);

user.email = "aniket@hcl.com"
// Object.freeze(user);
user.email = "anni@hcltech.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello user");
}

user.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(user.greeting);
console.log(user.greeting());
console.log(user.greeting2());

