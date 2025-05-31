// Immediately Invoked Function Expression (IIFE)
// we need IIFE because global data and variables can pollute the functions any time so, through iife we create a function expression that has its own protected scope.
// when we have to use more than 1 iife in code then we must use semicolon(;) after each iife

// Named Iife
(function chai() {
    console.log(`DB connected`);
})();

// Unnamed Iife
( (name) => {
    console.log(`DB connected 2 ${name}`);
})('hitesh')

