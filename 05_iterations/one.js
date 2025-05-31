// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element); // element is not defined 

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + ' * ' + j + ' = ' + i*j)
    }
    
}


let arr = ["flash", "batman", "superman"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break; 
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}

// Notes: when we have to break any control flow then we use break keyword 