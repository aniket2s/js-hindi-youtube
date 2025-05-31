// JS is a synchronous and single threaded langugae at default.
// Execution Context executes one line of code at a time. Each operation waits for the last one to complete before executing.
// Call Stack and Memory Heap
// Blocking code(blocks flow of program) vs Non blocking code(does not block execution)
// JS Engine does all the execution and it has call stack and memory heap in it.
// Whenever a program gets executed, a call stack gets set up in which Global EC comes up first and then all function gets loaded.
// Remember Event loop with the help of that diagram.

const sayHitesh = function(){
    console.log("Hitesh");
}

const changeText = function(){
    document.querySelector('h1').innerHTML = "best JS Series"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("Stopped");
})