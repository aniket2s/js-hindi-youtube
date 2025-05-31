// JS Execution Context 
// Global EC -> whenever we give a code to JS, then the first thing that always gets set up is Global EC and Global EC gets referred to a variable known as 'this'.
// Functional EC
// Eval EC

// JS runs any program in 2 phases:
// Memory Creation Phase -> also known as memory allocaion phase where memories are allocated.
// Execution Phase

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// Steps in which above code gets executed in JS:
// 1.) Global Execution/Environment -> at first, GEC gets included inside 'this'

// 2.) Memory Phase -> variables are given memory.
//     val1 -> undefined
//     val2 -> undefined
//     addNum -> function defintion
//     result1 -> undefined
//     result2 -> undefined 

// 3.) Execution Phase
//     val1 = 10
//     val2 = 5
//     result1 -> addNum -> a new execution context will be created for the function in which we have variable sendbox and execution thread ->
//     and now for this function's EC, separate Memory phase and Execution phase is created.
//     Hence, in memory phase, val1 -> undefined , val2 -> undefined and total -> undefined.
//     In Execution phase we have, num1 = 10, num2 = 5 and total = 15. 'total' value gets returned to Global EC and this new function's EC gets deleted.

//     result2 -> addNum -> a new execution context will be created for the function in which we have variable sendbox and execution thread ->
//     and now for this function's EC, separate Memory phase and Execution phase is created.
//     Hence, in memory phase, val1 -> undefined , val2 -> undefined and total -> undefined.
//     In Execution phase we have, num1 = 10, num2 = 2 and total = 12. 'total' value gets returned to Global EC and this new function's EC gets deleted.


// for every function call, a new execution environment gets created which is also known as functional EC

// Call Stack works on LIFO method. (remember that example of one(), two() and three())