const sayDate = function(str){
    console.log(str, Date.now());
}

let intervalId;

document.querySelector('#start').addEventListener('click', function(){
    if(!intervalId){
        intervalId = setInterval(sayDate, 1000, 'hi')
    }
    console.log("started");
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null;
    console.log("Stopped");
})
