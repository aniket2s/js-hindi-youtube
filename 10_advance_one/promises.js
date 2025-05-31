// Making promises

// const promise1 = new Promise(function(resolve, reject) {
//     // Do an async task
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     }, 1000)
// })

// promise1.then(function(){
//     console.log("Promise consumed");
// })

// creating promise without giving it any name

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }). then(function(){
//     console.log("Async 2 resolved");
// })

// creating 3rd promise

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai@example.com"}) // passing an object through resolve method and we can consume it in then method
//     }, 1000)
// })

// promise3.then(function(user){
//     console.log(user); // output -> {username: "chai", email: "chai@example.com"}
// })

// 4th promise 

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let error = false
//         if(!error) {
//             resolve({username: "hitesh", password: "123"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promise4
// .then((user) => {
//     console.log(user); // {username: "hitesh", password: "123"}
//     return user.username // 'hitesh' will get returned and we can consume it in then method again.
// })
// .then((username) => {
//     console.log(username); // hitesh
// })
// .catch(function(error){
//     console.log(error); // ERROR: Something went wrong
// })
// .finally(() => console.log("The promise is either resolved or rejected"))

// 5th promise

// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error) {
//             resolve({username: "javascript", password: "123"})
//         }
//         else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromise5() {
//     try {
//         const response = await promise5
//         console.log(response);
//     } catch(error) {
//         console.log(error);
//     }
// }

// consumePromise5()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

// converting above async function code to then and catch method. We can use any of them.

fetch('https://jsonplaceholder.typicode.com/users') // fetch in response gives promise hence, we can apply then and catch method.
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// 41st lecture, we learnt everything about fetch API, priority queue and everything that has been going on internally with fetch call.