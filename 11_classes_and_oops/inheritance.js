class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("chai", "chai@teacher.com", "123");
const masalaChai = new user("aniket");
masalaChai.logMe();

console.log(chai);
chai.addCourse();
chai.logMe();

console.log(chai instanceof teacher); // true
console.log(chai instanceof user); // true
