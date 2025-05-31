// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {
    5: "a",
    6: "b"
}

// const obj3 = { obj1, obj2 }
// console.log(obj3); // output -> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2, obj3); // we can give an empty object {} as a target otherwise obj1 will act as a target object.

// console.log(obj1); // output -> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj4); // output -> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj4 === obj1); // true


const obj5 = {...obj1, ...obj2, ...obj3} // using spread operator
// console.log(obj5); // output -> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(users[1]["email"]);

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // returns all keys (of an object ) as an array of strings. // output -> [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // returns all values (of an object ) in an array. // output -> [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // output -> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// console.log(typeof Object.keys(tinderUser)); // object

// =====================================================================================================================

// Object Destructuring

const course = {
    name: "JS in Hindi",
    price: "999",
    instructor: "hitesh"
}

const {instructor: teacher} = course // another way to access props of an object

// console.log(instructor); // output => hitesh
console.log(teacher); // output will be same => hitesh


