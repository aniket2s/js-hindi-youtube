// let myName = "hitesh     "

// console.log(myName.length); // 11
// console.log(myName.truelength()); // we want to create a new method truelength() that gives string length by eliminatiing all spaces. (please refer to Line 60)


let myHero = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

// creating a new method named as hitesh inside object(universally) which means everything that is an object will have access to this method.
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// we want to check if we are injecting a property to array(universally) then will it be accessible to any object? No, it will not be because array is an heir to Object in hierarchy in JS.
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heropower.hitesh() // output-> hitesh is present in all objects
// myHero.hitesh() // output-> hitesh is present in all objects
// myHero.heyHitesh() // output-> Hitesh says hello
// heropower.heyHitesh() // output-> error


// INHERITANCE

const user = {
    name: "Chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user // this means that properties of user is inherited to teacher

// modern syntax for inheritance
Object.setPrototypeOf(teachingSupport, teacher) // this means teachingSupport gets inherited by properties of teacher

// we want to create a new method truelength() that gives string length by eliminatiing all spaces. 
let anotherUsername = "ChaiaurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();