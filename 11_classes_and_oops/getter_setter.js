class User {
    constructor(email, password){
        this.email = email
        this.password = password // it will not set value of password here because it is getting overwritten
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("hitesh@ai", "abc")

console.log(hitesh.password); // abchitesh

// Note: Let's understand Getters and setters with an example of above code. We are storing value of password as 'abc' but 
// if someone tries to access this password then we are giving them 'abchitesh' in return and not the actual password (abc).

// We have to define getters and setters for the properties that we don't want anyone to access directly.  

// Old syntax of the above code is in defineproperties_get_set.js file